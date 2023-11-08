import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSizesComponent } from './all-sizes.component';

const routes: Routes = [
  { path: '', component:  AllSizesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroDetailRoutingModule { }
