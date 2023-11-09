import { Component, OnInit } from "@angular/core";
import { ViewCell } from "ng2-smart-table";

@Component({
  selector: "ngx-active-badge",
  templateUrl: "./active-badge.component.html",
  styleUrls: ["./active-badge.component.scss"],
})
export class ActiveBadgeComponent implements ViewCell {
  value: string | number;
  rowData: any;
}
