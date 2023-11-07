import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { ConfigService } from "../../Config/config.service";

@Injectable({
  providedIn: "root",
})
export class SizeService {
  constructor(private configServices: ConfigService) {}
  getCountry(getParams?: any) {
    return this.configServices.readRequest("/size/all", getParams).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
