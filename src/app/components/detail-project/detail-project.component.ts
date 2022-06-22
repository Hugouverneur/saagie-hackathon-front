import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { SaagieApiService } from 'src/app/services/saagie-api.service';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.scss']
})
export class DetailProjectComponent implements OnInit {

  projectId: string = this.route.snapshot.params['projectId'];
  projectData: any = {};

  constructor(private saagieApiService: SaagieApiService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProjectData(this.projectId);
  }

  getProjectData(projectId: string) {
    this.saagieApiService.getProjectData(projectId).then(
      (data) => {
        this.projectData = data;
      }
    )
  }

}
