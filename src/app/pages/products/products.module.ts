import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbToggleModule,
  NbUserModule,
} from "@nebular/theme";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductFormComponent } from "./product-form/product-form.component";
import { NgxDropzoneModule } from "ngx-dropzone";
import { ReactiveFormsModule } from "@angular/forms";
import { AllProductsComponent } from './all-products/all-products.component';
@NgModule({
  declarations: [ProductFormComponent, AllProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbToggleModule,
    NbUserModule,
  ],
})
export class ProductsModule {}
