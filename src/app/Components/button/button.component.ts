import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ViewCell } from "ng2-smart-table";
import { SizeService } from "../../Services/Size/size.service";
import { ColorService } from "../../Services/Color/color.service";
@Component({
  selector: "ngx-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements ViewCell {
  constructor(
    private sizeService: SizeService,
    private colorService: ColorService
  ) {}
  @Input() value: string | number;
  @Input() rowData: any;
  @Input() type: any;
  @Input() action: any;
  @Output() saves: EventEmitter<any> = new EventEmitter();

  deleteRow(id: number) {
    if (this.type === "colors") {
      this.colorService.deleteColor(id).subscribe({
        next: (response) => {
          if (response.status === 200) {
            if (response.body.status === 200) {
              // this.router.navigate(["/sizes"]);
              this.colorService.setColors(response.body.data.colors);
            }
          }
        },
        error: (err) => {},
      });
    } else {
      this.sizeService.deleteSize(id).subscribe({
        next: (response) => {
          if (response.status === 200) {
            if (response.body.status === 200) {
              // this.router.navigate(["/sizes"]);
              this.sizeService.setSizes(response.body.data.sizes);
            }
          }
        },
        error: (err) => {},
      });
    }
  }
}
