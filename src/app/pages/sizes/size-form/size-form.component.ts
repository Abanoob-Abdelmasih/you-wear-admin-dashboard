import { Component, OnInit } from "@angular/core";
import { SizeService } from "../../../Services/Size/size.service";

@Component({
  selector: "ngx-size-form",
  templateUrl: "./size-form.component.html",
  styleUrls: ["./size-form.component.scss"],
})
export class SizeFormComponent implements OnInit {
  sizeName: string;
  abbreviation: string;
  activate: boolean | undefined;
  constructor(private sizeService: SizeService) {}

  ngOnInit(): void {
    this.activate = this.activate === undefined ? true : this.activate;
    console.log("on itit");
  }

  // toggleActivate(activate: boolean) {
  //   // this.activate = activate;
  //   console.log(activate)
  // }

  addSizeFuntion() {
    const postParams = {
      name: this.sizeName,
      abbreviation: this.abbreviation,
      isActive: this.activate,
    };

    console.log(postParams);

    // this.sizeService.addSize({}, postParams).subscribe({
    //   next: (response) => {
    //     if (response.status === 200) {
    //       if (response.body.status === 200) {
    //       }
    //     }
    //   },
    //   error: (err) => {},
    // });
  }
}
