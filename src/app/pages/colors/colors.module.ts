import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ColorsRoutingModule } from "./colors-routing.module";
import { AllColorsComponent } from "./all-colors/all-colors.component";
import { ColorFormComponent } from "./color-form/color-form.component";
import { NbCardModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

@NgModule({
  declarations: [AllColorsComponent, ColorFormComponent],
  imports: [
    CommonModule,
    ColorsRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
  ],
})
export class ColorsModule {}
