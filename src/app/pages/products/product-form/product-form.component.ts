import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ColorService } from "../../../Services/Color/color.service";
import { SizeService } from "../../../Services/Size/size.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../../Services/Product/product.service";
import { stringify } from "querystring";

@Component({
  selector: "ngx-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.scss"],
})
export class ProductFormComponent implements OnInit {
  //
  constructor(
    private colorService: ColorService,
    private sizeService: SizeService,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {}

  // variables
  activate?: boolean | undefined = true;
  allSizes = [];
  allColors = [];
  configsSelected = [];

  // edit vars
  editID: number;

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

    // FOR EDIT FORM
    this.route.params.subscribe((params) => {
      this.editID = Number(params["id"]);
      if (this.editID) {
        this.sizeService.getSize(this.editID).subscribe({
          next: (response) => {
            if (response.status === 200) {
              if (response.body.status === 200) {
                // this.sizeForm.setValue({
                //   sizeName: response.body.data.size.name,
                //   abbreviation: response.body.data.size.abbreviation,
                // });
                this.activate =
                  response.body.data.size.isActive === 0 ? false : true;
              }
            }
          },
          error: (err) => {},
        });
      } else {
        this.activate = true; // make by default true for new size forms
      }
    });
  }

  productForm = new FormGroup({
    productName: new FormControl(null),
    colorSelected: new FormControl(null),
    sizeSelected: new FormControl(null),
    quantity: new FormControl(null),
    images: new FormControl(null),
  });

  // configOptionsArray = new FormGroup({
  //   colorSelected: new FormControl(null),
  //   sizeSelected: new FormControl(null),
  //   quantity: new FormControl(null),
  // });

  // <---------------------------- Add config to array ---------------------------->
  addConfig() {
    this.configsSelected.push({
      color_id: this.productForm.value.colorSelected,
      size_id: this.productForm.value.sizeSelected,
      quantity: this.productForm.value.quantity,
    });

    this.productForm.get("colorSelected").reset();
    this.productForm.get("sizeSelected").reset();
    this.productForm.get("quantity").reset();
  }

  removeConfig(e: Event) {
    const id = (e.target as HTMLInputElement).id;
    this.configsSelected.splice(Number(id), 1);
  }
  // <---------------------------- end of add config to array ---------------------------->

  // <---------------------------- dropzone logic ---------------------------->
  files: File[] = [];
  temp = [];

  onSelect(event) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  // <---------------------------- end of dropzone logic ---------------------------->

  // <---------------------------- product details function ---------------------------->

  productDetailsFunction() {
    const formData = new FormData();
    formData.append("name", this.productForm.value.productName);

    formData.append("config", JSON.stringify(this.configsSelected));

    this.files.forEach((file) => {
      formData.append("images[]", file);
    });

    console.log(formData, this.configsSelected, this.files);
    this.productService.addProduct({}, formData).subscribe({
      next: (response) => {},
      error: (err) => {},
    });
  }
}
