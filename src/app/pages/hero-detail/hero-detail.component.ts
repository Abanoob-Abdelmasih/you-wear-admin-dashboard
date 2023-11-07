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

    this.sizeService.getAllSizes(getParams).subscribe({
      next: (response) => {
        if (response.status === 200) {
          if (response.body.status === 200) {
          console.log(response.body.data.all_sizes);
        }
        }
      },
      error: (err) => {
      },
    });
  }
}
