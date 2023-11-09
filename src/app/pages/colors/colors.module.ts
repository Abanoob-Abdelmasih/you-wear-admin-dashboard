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
import { ColorsRoutingModule } from "./colors-routing.module";
import { AllColorsComponent } from "./all-colors/all-colors.component";
import { ColorFormComponent } from "./color-form/color-form.component";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ColorPickerModule } from "ngx-color-picker";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ThemeModule } from "../../@theme/theme.module";

@NgModule({
  declarations: [AllColorsComponent, ColorFormComponent],
  imports: [
    CommonModule,
    ColorsRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    ColorPickerModule,
    FormsModule,
    ReactiveFormsModule,
    NbToggleModule,
    ThemeModule,
    NbInputModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
  ],
})
export class ColorsModule {}
