import { Component, Input } from "@angular/core";
import { ViewCell } from "ng2-smart-table";
@Component({
  selector: "ngx-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements ViewCell {
  @Input() value: string | number;
  @Input() rowData: any;

  customAction() {
    // Define the custom action logic here
    console.log('Custom action clicked for row:', this.rowData);
  }
}
