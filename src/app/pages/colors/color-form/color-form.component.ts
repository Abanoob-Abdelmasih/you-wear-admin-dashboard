import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ColorService } from "../../../Services/Color/color.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "ngx-color-form",
  templateUrl: "./color-form.component.html",
  styleUrls: ["./color-form.component.scss"],
})
export class ColorFormComponent implements OnInit {
  color: any;

  showColor() {
    console.log(this.color);
  }

  activate: boolean | undefined;

  colorForm = new FormGroup({
    colorName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  formSubmitted: boolean = false;

  // ///////////  Edit Params   //////////////
  editID: number;

  constructor(
    private colorService: ColorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.editID = Number(params["id"]);
      if (this.editID) {
        this.colorService.getColor(this.editID).subscribe({
          next: (response) => {
            if (response.status === 200) {
              if (response.body.status === 200) {
                this.colorForm.patchValue({
                  colorName: response.body.data.size.name,
                });
                this.activate =
                  response.body.data.size.isActive === 0 ? false : true;
              }
            }
          },
          error: (err) => {},
        });
      } else {
        this.activate = true; // make by default true for new size forms
      }
    });
  }

  colorDetailsFunction() {
    this.formSubmitted = true;

    const postParams = {
      name: this.colorForm.value.colorName,
      hexcode: this.color,
      isActive: this.activate,
    };

    console.log(postParams);

    if (this.colorForm.valid) {
      if (this.editID) {
        this.colorService.editColor(this.editID, {}, postParams).subscribe({
          next: (response) => {
            if (response.status === 200) {
              if (response.body.status === 200) {
                this.router.navigate(["/colors"]);
              }
            }
          },
          error: (err) => {},
        });
      } else {
        this.colorService.addColor({}, postParams).subscribe({
          next: (response) => {
            if (response.status === 200) {
              if (response.body.status === 200) {
                this.router.navigate(["/colors"]);
              }
            }
          },
          error: (err) => {},
        });
      }
    } else {
      this.formSubmitted = false;
    }
  }
}
