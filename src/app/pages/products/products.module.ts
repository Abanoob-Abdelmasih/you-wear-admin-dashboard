import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import { ProductFormComponent } from './product-form/product-form.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
@NgModule({
  declarations: [
    ProductFormComponent
  ],
  imports: [CommonModule, ProductsRoutingModule, NgxDropzoneModule],
})
export class ProductsModule {}
