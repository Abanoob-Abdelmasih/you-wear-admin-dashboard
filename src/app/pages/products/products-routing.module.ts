import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../miscellaneous/not-found/not-found.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [
  {
    path: "",
    // component: AllSizesComponent,
    children: [
      // {
      //   path: "",
      //   component: AllSizesComponent,
      // },
      {
        path: "form",
        component: ProductFormComponent,
      },
      {
        path: ":id/edit",
        component: ProductFormComponent,
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
export class ProductsRoutingModule { }
