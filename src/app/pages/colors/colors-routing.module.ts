import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorFormComponent } from './color-form/color-form.component';
import { AllColorsComponent } from './all-colors/all-colors.component';
import { NotFoundComponent } from '../miscellaneous/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    // component: AllSizesComponent,
    children: [
      {
        path: "",
        component: AllColorsComponent,
      },
      {
        path: "form",
        component: ColorFormComponent,
      },
      {
        path: ":id/edit",
        component: ColorFormComponent,
      },
      {
        path: "",
        redirectTo: "",
        pathMatch: "full",
      },
      {
        path: "**",
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorsRoutingModule { }
