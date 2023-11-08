import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroDetailRoutingModule } from "./sizes-routing.module";
import { AllSizesComponent } from "./all-sizes/all-sizes.component";
import { NbCardModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ButtonModule } from "../../Components/button/button.module";
import { SizeFormComponent } from "./size-form/size-form.component";

@NgModule({
  declarations: [AllSizesComponent, SizeFormComponent],
  imports: [
    CommonModule,
    HeroDetailRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    ButtonModule
  ],
})
export class HeroDetailModule {}
