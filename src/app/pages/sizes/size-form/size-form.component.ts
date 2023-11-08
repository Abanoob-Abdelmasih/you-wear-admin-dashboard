import { Component, OnInit } from "@angular/core";
import { SizeService } from "../../../Services/Size/size.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "ngx-size-form",
  templateUrl: "./size-form.component.html",
  styleUrls: ["./size-form.component.scss"],
})
export class SizeFormComponent implements OnInit {
  sizeName: string;
  abbreviation: string;
  activate: boolean | undefined;

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
                console.log(response.body.data);
              }
            }
          },
          error: (err) => {},
        });
      }
    });

    this.activate = this.activate === undefined ? true : this.activate;
  }

  addSizeFuntion() {
    const postParams = {
      name: this.sizeName,
      abbreviation: this.abbreviation,
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

  // ////////////////////////////////////////////////////////////
}
