import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroDetailRoutingModule } from "./hero-detail-routing.module";
import { HeroDetailComponent } from "./hero-detail.component";
import { NbCardModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ButtonModule } from "../../Components/button/button.module";

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [
    CommonModule,
    HeroDetailRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    ButtonModule
  ],
})
export class HeroDetailModule {}
