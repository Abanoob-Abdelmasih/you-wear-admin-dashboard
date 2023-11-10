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
@NgModule({
  declarations: [ProductFormComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
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
