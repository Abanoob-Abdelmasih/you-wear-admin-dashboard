import { Injectable } from "@angular/core";
import { ConfigService } from "../../Config/config.service";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ColorService {
  constructor(private configServices: ConfigService) {}

  public colors$ = new BehaviorSubject([]);

  setColors(data: any) {
    this.colors$.next(data);
  }

  getColors() {
    return this.colors$.asObservable();
  }

  getAllColors(getParams?: any) {
    return this.configServices.readRequest("/color/all", getParams).pipe(
      map((response) => {
        return response;
      })
    );
  }

  addColor(getParams?: any, postParams?: any) {
    return this.configServices
      .postNewRequest("/color/create", getParams, postParams)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  deleteColor(id: number, getParams?: any, postParams?: any) {
    return this.configServices
      .postNewRequest(`/color/${id}/delete`, getParams, postParams) //"color/7/delete"
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getColor(id: number) {
    return this.configServices.readRequest("/color/" + id).pipe(
      map((response) => {
        return response;
      })
    );
  }

  editColor(id: number, getParams?: any, postParams?: any) {
    return this.configServices
      .postNewRequest(`/color/${id}/update`, getParams, postParams)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
