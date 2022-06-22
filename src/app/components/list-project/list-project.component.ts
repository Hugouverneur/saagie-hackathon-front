import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { SaagieApiService } from 'src/app/services/saagie-api.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {

  projects: any[] = [];
  projectsSubscription!: Subscription;

  constructor(private saagieApi: SaagieApiService) { }

  ngOnInit(): void {
    this.getProjectList();    
  }

  getProjectList() {
    this.projectsSubscription = this.saagieApi.projectsSubject.subscribe(
      (projects: any[]) => {
        this.projects = projects;
        console.log(projects);
        
      }
    );
    this.saagieApi.getProjectList();
    this.saagieApi.emitProjects();
  }

  ngOnDestroy(): void {
    this.projectsSubscription.unsubscribe();
  }

}
