import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ColorService } from "../../../Services/Color/color.service";
import { SizeService } from "../../../Services/Size/size.service";

@Component({
  selector: "ngx-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.scss"],
})
export class ProductFormComponent implements OnInit {
  //
  constructor(
    private colorService: ColorService,
    private sizeService: SizeService
  ) {}

  // variables
  activate?: boolean | undefined = true;
  allSizes = [];
  allColors = [];

  ngOnInit(): void {
    this.colorService.getAllColors().subscribe({
      next: (response) => {
        if (response.status === 200) {
          if (response.body.status === 200) {
            this.allColors = response.body.data.all_colors;
          }
        }
      },
      error: (err) => {},
    });

  }

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
