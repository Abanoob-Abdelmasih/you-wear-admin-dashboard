import { Injectable } from "@angular/core";
import { ConfigService } from "../../Config/config.service";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private configServices: ConfigService) {}

  addProduct(getParams?: any, postParams?: any) {
    return this.configServices
      .postNewRequest("/product/create", getParams, postParams)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
