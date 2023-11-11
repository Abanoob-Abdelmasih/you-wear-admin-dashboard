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
  configsSelected = [];

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

    this.sizeService.getAllSizes().subscribe({
      next: (response) => {
        if (response.status === 200) {
          if (response.body.status === 200) {
            this.allSizes = response.body.data.all_sizes;
          }
        }
      },
      error: (err) => {},
    });
  }

  productForm = new FormGroup({
    colorSelected: new FormControl(null),
    sizeSelected: new FormControl(null),
    quantity: new FormControl(null),
  });

  // configOptionsArray = new FormGroup({
  //   colorSelected: new FormControl(null),
  //   sizeSelected: new FormControl(null),
  //   quantity: new FormControl(null),
  // });

  // <---------------------------- Add config to array ---------------------------->
  addConfig() {
    this.configsSelected.push({
      color: this.productForm.value.colorSelected,
      size: this.productForm.value.sizeSelected,
      quantity: this.productForm.value.quantity,
    });
    this.productForm.reset();
    console.log(this.configsSelected);
  }

  removeConfig(e: Event) {
    const id = (e.target as HTMLInputElement).id
    this.configsSelected.splice(Number(id), 1);
  }
  // <---------------------------- end of add config to array ---------------------------->

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
    // console.log(this.productForm.value.colorSelected);
    alert(this.productForm.value)
  }
}
