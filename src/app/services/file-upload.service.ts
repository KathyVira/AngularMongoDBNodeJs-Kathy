import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient, ) { }

  //   postFile(fileToUpload: File): Observable<boolean> {
  //     const endpoint = 'your-destination-url';
  //     const formData: FormData = new FormData();
  //     formData.append('fileKey', fileToUpload, fileToUpload.name);
  //     return this.http
  //       .post(endpoint, formData, { headers: yourHeadersConfig })
  //       .map(() => { return true; })
  //       .catch((e) => this.handleError(e));
  // }
}
