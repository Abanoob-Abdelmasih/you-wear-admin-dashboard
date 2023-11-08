import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ViewCell } from "ng2-smart-table";
@Component({
  selector: "ngx-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements ViewCell, OnInit {
  @Input() value: string | number;
  @Input() rowData: any;
  @Input() customValue: any;
  @Output() saves: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    console.log("on in it");
    console.log(this.customValue);
  }

  onClick() {
    // this.saves.emit(this.rowData);
    console.log(this.rowData)
  }

  customAction() {
    // Define the custom action logic here
    // console.log("Custom action clicked for row:", this.rowData, this.value);
    console.log(this.customValue);
  }
}
