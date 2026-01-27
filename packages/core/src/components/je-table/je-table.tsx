import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "je-table",
  styleUrl: "je-table.css",
})
export class JeTable {
  @Prop() striped = false;
  render() {
    return <Host />;
  }
}
