import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllSizesComponent } from "./all-sizes/all-sizes.component";
import { NotFoundComponent } from "../miscellaneous/not-found/not-found.component";
import { SizeFormComponent } from "./size-form/size-form.component";

const routes: Routes = [
  {
    path: "",
    // component: AllSizesComponent,
    children: [
      {
        path: "",
        component: AllSizesComponent,
      },
      {
        path: "form",
        component: SizeFormComponent,
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
  exports: [RouterModule],
})
export class SizeRoutingModule {}
