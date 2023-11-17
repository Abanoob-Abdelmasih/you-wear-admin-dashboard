import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../Services/Product/product.service";
import { ButtonComponent } from "../../../Components/button/button.component";

@Component({
  selector: "ngx-all-products",
  templateUrl: "./all-products.component.html",
  styleUrls: ["./all-products.component.scss"],
})
export class AllProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}

  data = [];

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: "ID",
        type: "number",
      },
      name: {
        title: "Name",
        type: "string",
      },

      // isActive: {
      //   title: "Active",
      //   type: "custom",
      //   renderComponent: ActiveBadgeComponent,
      // },
      // edit: {
      //   title: "Edit",
      //   type: "custom",
      //   filter: false,
      //   renderComponent: ButtonComponent,
      //   onComponentInitFunction(instance) {
      //     // instance.saves.subscribe((rowData) => {});
      //     instance.type = "colors";
      //     instance.action = "edit";
      //   },
      // },
      delete: {
        title: "Delete",
        type: "custom",
        filter: false,
        renderComponent: ButtonComponent,
        onComponentInitFunction(instance) {
          // instance.saves.subscribe((rowData) => {});
          instance.type = "colors";
          instance.action = "delete";
        },
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
  };

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        if (response.status === 200) {
          if (response.body.status === 200) {
            this.data = response.body.data.all_products;
            console.log(this.data);
          }
        }
      },
      error: (err) => {},
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
