import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroDetailRoutingModule } from "./all-sizes-routing.module";
import { AllSizesComponent } from "./all-sizes.component";
import { NbCardModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ButtonModule } from "../../../Components/button/button.module";

@NgModule({
  declarations: [AllSizesComponent],
  imports: [
    CommonModule,
    HeroDetailRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    ButtonModule
  ],
})
export class HeroDetailModule {}
