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
  @Input() type: any;
  @Input() action: any;
  @Output() saves: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    console.log(this.rowData, this.type);
  }

  customAction() {}
}
