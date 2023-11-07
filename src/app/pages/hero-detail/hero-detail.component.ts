import { Component, OnInit } from "@angular/core";
import { SizeService } from "../../Services/Size/size.service";

@Component({
  selector: "ngx-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.scss"],
})
export class HeroDetailComponent implements OnInit {
  constructor(private sizeService: SizeService) {}

  ngOnInit(): void {
    const getParams = {};

    this.sizeService.getCountry(getParams).subscribe({
      next: (response) => {
        // if (response.status === 200) {
        //   if (response.body.status === 200) {
        //     let tempCountries = response.body.data; // because im getting 3 different arrays of countries
        //     for (let i = 0; i < tempCountries.length; i++) {
        //       this.countries = [...tempCountries];
        //     }
        //     if (this.is_edit != true) {
        //       this.getStates(114);
        //     }
        //   }
        // }
        console.log(response);
      },
      error: (err) => {
        // this.toastr.error("", err.error.message);
      },
    });
  }
}
