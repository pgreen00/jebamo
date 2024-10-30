import { setMode } from "@stencil/core";

setMode(el => el.getAttribute('mode') || 'default');
