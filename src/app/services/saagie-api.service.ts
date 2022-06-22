import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaagieApiService {

  projects: any[] = [];
  projectsSubject = new Subject<any[]>();

  constructor(private http: HttpClient) { }

  // Methode préfaite pour faire nos requetes vers la base de donnée
  private async request(method: string, url: string, data?: any) {
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });

    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  emitProjects() {
    this.projectsSubject.next(this.projects);
  }

  getProjectList() {
    this.request('GET', `${environment.serverUrl}/myprojects`).then(
      (data: any) => {
        this.projects = data ? data.projects : [];
        this.emitProjects();
      }
    )
  }

  getProjectData(projectId: string) {
    return new Promise(
      (resolve, reject) => {

        this.request('GET', `${environment.serverUrl}/project`, {projectId: projectId}).then(
          (data: any) => {
            console.log(data);
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        )
        
      }
    )
  }

}
