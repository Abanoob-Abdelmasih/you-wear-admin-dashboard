import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ColorsRoutingModule } from "./colors-routing.module";
import { AllColorsComponent } from "./all-colors/all-colors.component";
import { ColorFormComponent } from "./color-form/color-form.component";

@NgModule({
  declarations: [AllColorsComponent, ColorFormComponent],
  imports: [CommonModule, ColorsRoutingModule],
})
export class ColorsModule {}
