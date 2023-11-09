import { Component, OnInit } from "@angular/core";
import { ActiveBadgeComponent } from "../../../Components/active-badge/active-badge.component";
import { ButtonComponent } from "../../../Components/button/button.component";

@Component({
  selector: "ngx-all-colors",
  templateUrl: "./all-colors.component.html",
  styleUrls: ["./all-colors.component.scss"],
})
export class AllColorsComponent implements OnInit {



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
      abbreviation: {
        title: "Abbreviation",
        type: "string",
      },
      isActive: {
        title: "Active",
        type: "custom",
        renderComponent: ActiveBadgeComponent,
      },
      edit: {
        title: "Edit",
        type: "custom",
        filter: false,
        renderComponent: ButtonComponent,
        onComponentInitFunction(instance) {
          // instance.saves.subscribe((rowData) => {});
          instance.type = "sizes";
          instance.action = "edit";
        },
      },
      delete: {
        title: "Delete",
        type: "custom",
        filter: false,
        renderComponent: ButtonComponent,
        onComponentInitFunction(instance) {
          // instance.saves.subscribe((rowData) => {});
          instance.type = "sizes";
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

  data = [];

  ngOnInit(): void {
    // this.sizeService.getSizes().subscribe({
    //   next: (response) => {
    //     this.data = response;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });

    // this.sizeService.getAllSizes().subscribe({
    //   next: (response) => {
    //     if (response.status === 200) {
    //       if (response.body.status === 200) {
    //         this.sizeService.setSizes(response.body.data.all_sizes);
    //       }
    //     }
    //   },
    //   error: (err) => {},
    // });
    console.log()
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
