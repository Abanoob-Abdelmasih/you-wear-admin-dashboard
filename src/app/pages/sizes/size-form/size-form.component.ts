import { Component, OnInit } from "@angular/core";
import { SizeService } from "../../../Services/Size/size.service";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-size-form",
  templateUrl: "./size-form.component.html",
  styleUrls: ["./size-form.component.scss"],
})
export class SizeFormComponent implements OnInit {
  sizeName: string;
  abbreviation: string;
  activate: boolean | undefined;
  constructor(private sizeService: SizeService, private router: Router) {}

  ngOnInit(): void {
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
}
