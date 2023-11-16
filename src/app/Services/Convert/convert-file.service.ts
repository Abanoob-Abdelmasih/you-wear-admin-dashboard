import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConvertFileService {

  constructor(private http: HttpClient) { }

  getImage() {
    return this.http
      .get("http://127.0.0.1:8000/storage/product_images/6553b67260d2a.png", {
        responseType: "arraybuffer"
      })
      .pipe(
        map(response => {
          return new File([response], "myImage.png");
        })
      );
  }
}
