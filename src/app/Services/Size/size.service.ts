import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { ConfigService } from "../../Config/config.service";

@Injectable({
  providedIn: "root",
})
export class SizeService {
  constructor(private configServices: ConfigService) {}

  getAllSizes(getParams?: any) {
    return this.configServices.readRequest("/size/all", getParams).pipe(
      map((response) => {
        return response;
      })
    );
  }

  addSize(getParams?: any, postParams?: any) {
    return this.configServices
      .postNewRequest("/size/create", getParams, postParams)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  deleteSize(id: number, getParams?: any, postParams?: any) {
    return this.configServices
      .postNewRequest(`/size/${id}/delete`, getParams, postParams) //"size/7/delete"
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getSize(id: number) {
    return this.configServices.readRequest("/size/" + id).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
