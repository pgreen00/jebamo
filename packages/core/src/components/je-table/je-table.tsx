import { Component, Element, h, Host, Prop } from "@stencil/core";

//striped rows
//density/spacing of rows
//hover/click on rows
//selection
//sorting
//filtering
//pagination
//sticky columns
//details (less important)
//groupings (less important)
//trees (less important)
//loading state (less important)
//empty state (less important)
//server side support (least important)

@Component({
  tag: "je-table",
  styleUrl: "je-table.css",
  shadow: true,
})
export class JeTable {
  @Element() host: HTMLElement;
  @Prop() columns?: number;

  componentDidLoad() {
    const columns =
      this.columns ??
      this.host.querySelectorAll(":scope > je-tr[type=header] > je-tc").length;
    this.host.style.setProperty("--columns", columns.toString());
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
