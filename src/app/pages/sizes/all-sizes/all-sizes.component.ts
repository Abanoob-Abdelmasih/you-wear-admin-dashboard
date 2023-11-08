import { Component, OnInit } from "@angular/core";
import { SizeService } from "../../../Services/Size/size.service";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../@core/data/smart-table";
import { ButtonComponent } from "../../../Components/button/button.component";

@Component({
  selector: 'ngx-all-sizes',
  templateUrl: './all-sizes.component.html',
  styleUrls: ['./all-sizes.component.scss'],
})
export class AllSizesComponent implements OnInit {
  constructor(
    private sizeService: SizeService,
    private service: SmartTableData
  ) {
    // const data = this.service.getData();
    // console.log(data);
    // this.source.load(data);
  }

  // source: LocalDataSource = new LocalDataSource();

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
        type: "boolean",
      },
      edit: {
        title: "Edit",
        type: "custom",
        renderComponent: ButtonComponent,
        onComponentInitFunction(instance) {
          // instance.saves.subscribe((rowData) => {});
          instance.type = "size";
          instance.action = "edit";
        },
      },
      delete: {
        title: "Delete",
        type: "custom",
        renderComponent: ButtonComponent,
        onComponentInitFunction(instance) {
          // instance.saves.subscribe((rowData) => {});
          instance.type = "size";
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
    const getParams = {};

    this.sizeService.getAllSizes(getParams).subscribe({
      next: (response) => {
        if (response.status === 200) {
          if (response.body.status === 200) {
            // console.log(response.body.data.all_sizes);
            this.data = response.body.data.all_sizes;
          }
        }
      },
      error: (err) => {},
    });
  }

  // constructor(private service: SmartTableData) {
  //   const data = this.service.getData();
  //   this.source.load(data);
  // }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
