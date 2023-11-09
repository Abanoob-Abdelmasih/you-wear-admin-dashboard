import { Component, OnInit } from "@angular/core";
import { SizeService } from "../../../Services/Size/size.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
@Component({
  selector: "ngx-size-form",
  templateUrl: "./size-form.component.html",
  styleUrls: ["./size-form.component.scss"],
})
export class SizeFormComponent implements OnInit {
  // sizeName: string;
  // abbreviation: string;
  activate: boolean | undefined;

  sizeForm = new FormGroup({
    sizeName: new FormControl(null),
    abbreviation: new FormControl(null),
    // activate: new FormControl(true),
  });

  // ///////////  Edit Params   //////////////
  editID: number;

  constructor(
    private sizeService: SizeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.editID = Number(params["id"]);
      if (this.editID) {
        this.sizeService.getSize(this.editID).subscribe({
          next: (response) => {
            if (response.status === 200) {
              if (response.body.status === 200) {
                console.log(response.body.data.size);
                this.sizeForm.setValue({
                  sizeName: response.body.data.size.name,
                  abbreviation: response.body.data.size.abbreviation,
                });
                this.activate =
                  response.body.data.size.isActive === 0 ? false : true;
              }
            }
          },
          error: (err) => {},
        });
      }
      // else {
      //   this.activate = this.activate === undefined ? true : this.activate;
      //   this.sizeForm.patchValue({first: 'Nancy'});
      // }
    });
  }

  addSizeFuntion() {
    const postParams = {
      name: this.sizeForm.value.sizeName,
      abbreviation: this.sizeForm.value.abbreviation,
      isActive: this.activate,
    };

    console.log(postParams);

    if (this.editID) {
      this.sizeService.editSize(this.editID, {}, postParams).subscribe({
        next: (response) => {
          if (response.status === 200) {
            if (response.body.status === 200) {
              this.router.navigate(["/sizes"]);
            }
          }
        },
        error: (err) => {},
      });
    } else {
      this.sizeService.addSize({}, postParams).subscribe({
        next: (response) => {
          if (response.status === 200) {
            if (response.body.status === 200) {
              this.router.navigate(["/sizes"]);
            }
          }
        },
        error: (err) => {},
      });
    }
  }

  // ////////////////////////////////////////////////////////////

  editSizeFuntion() {
    const postParams = {
      name: this.sizeForm.value.sizeName,
      abbreviation: this.sizeForm.value.abbreviation,
      isActive: this.activate,
    };

    console.log(postParams);

    this.sizeService.addSize({}, postParams).subscribe({
      next: (response) => {
        if (response.status === 200) {
          if (response.body.status === 200) {
            this.router.navigate(["/sizes"]);
          }
        }
      },
      error: (err) => {},
    });
  }
}
