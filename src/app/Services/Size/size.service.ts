import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { ConfigService } from "../../Config/config.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SizeService {
  constructor(private configServices: ConfigService) {}

 public sizes$ = new BehaviorSubject([]);

  setSizes(data: any) {
    this.sizes$.next(data)
  }

  getSizes(){
    return this.sizes$.asObservable()
  }


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

  editSize(id: number, getParams?: any, postParams?: any) {
    return this.configServices
      .postNewRequest(`/size/${id}/update`, getParams, postParams)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
