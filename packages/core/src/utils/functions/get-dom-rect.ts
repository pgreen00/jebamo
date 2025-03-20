/**
 * Recursively gather bounding rectangles of all "box-generating" child nodes
 * inside an element (including its shadow root if it has one), flattening
 * any `display: contents` elements along the way.
 */
function collectRects(element: Element): DOMRect[] {
  if (!element) {
    return [];
  }

  // The current list of rects from this element's children
  let rects: DOMRect[] = [];

  // Check if `element` itself generates a box, unless it's the top-level
  // element for which we are collecting rects. Usually we skip
  // the root since we want the sum of its children. But if you *do* want
  // the host's box, you could do it here:
  //
  const cs = window.getComputedStyle(element);
  if (cs.display !== 'contents') {
    rects.push(element.getBoundingClientRect());
  }

  // Get direct child nodes (shadow or light DOM)
  const childNodes = element.shadowRoot
    ? Array.from(element.shadowRoot.children)
    : Array.from(element.children);

  childNodes.forEach((child) => {
    if (
      child.nodeType === Node.ELEMENT_NODE &&
      !['STYLE', 'SCRIPT', 'LINK'].includes(child.tagName)
    ) {
      const computedStyle = window.getComputedStyle(child);

      // If the element doesn't generate a box, flatten it by recursing
      // into its children (or shadow children).
      if (computedStyle.display === 'contents') {
        rects = rects.concat(collectRects(child));
      } else {
        // Child *does* generate a box; use its bounding rect
        rects.push(child.getBoundingClientRect());

        // But also check if this child *itself* has a shadow root:
        if ((child as HTMLElement).shadowRoot) {
          rects = rects.concat(collectRects(child));
        }
      }
    }
  });

  return rects;
}

/**
 * Return a bounding rect that encompasses all the
 * box-generating children (including across shadow roots).
 */
export function getDOMRect(element: Element) {
  if (!element) {
    return new DOMRect();
  }

  const rects = collectRects(element);

  if (rects.length === 0) {
    return new DOMRect();
  }

  const left = Math.min(...rects.map((r) => r.left));
  const top = Math.min(...rects.map((r) => r.top));
  const right = Math.max(...rects.map((r) => r.right));
  const bottom = Math.max(...rects.map((r) => r.bottom));

  return new DOMRect(left, top, right - left, bottom - top);
}
