import { NgModule } from "@angular/core";
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
import { CommonModule } from "@angular/common";

import { SizeRoutingModule } from "./sizes-routing.module";
import { AllSizesComponent } from "./all-sizes/all-sizes.component";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ButtonModule } from "../../Components/button/button.module";
import { SizeFormComponent } from "./size-form/size-form.component";
import { ThemeModule } from "../../@theme/theme.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AllSizesComponent, SizeFormComponent],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    SizeRoutingModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    FormsModule,
    NbToggleModule
  ],
})
export class HeroDetailModule {}
