import { Component } from "@angular/core";

@Component({
  selector: "ngx-color-form",
  templateUrl: "./color-form.component.html",
  styleUrls: ["./color-form.component.scss"],
})
export class ColorFormComponent {
  color: any;

  showColor() {
    console.log(this.color);
  }
}
