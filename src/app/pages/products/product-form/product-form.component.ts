import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "ngx-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.scss"],
})
export class ProductFormComponent {
  // variables
  activate?: boolean | undefined = true;

  productForm = new FormGroup({
    colorSelected: new FormControl(null, Validators.required),
  });

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

  // <---------------------------- product details function ---------------------------->

  productDetailsFunction() {
    console.log(this.productForm.value.colorSelected);
  }
}
