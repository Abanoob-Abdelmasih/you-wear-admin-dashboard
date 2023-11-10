import { Component } from "@angular/core";

@Component({
  selector: "ngx-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.scss"],
})
export class ProductFormComponent {
  // variables
  activate?: boolean | undefined = true;

  // <---------------------------- dropzone logic ---------------------------->
  files: File[] = [];

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  // <---------------------------- end of dropzone logic ---------------------------->
}
