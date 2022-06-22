import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaagieApiService } from 'src/app/services/saagie-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.scss']
})
export class DetailProjectComponent implements OnInit {

  projectId: string = this.route.snapshot.params['projectId'];
  projectData: any = {};
  environment = environment;

  constructor(private saagieApiService: SaagieApiService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getProjectData(this.projectId);
  }

  getProjectData(projectId: string) {
    this.saagieApiService.getProjectData(projectId).then(
      (data) => {
        console.log(data);
        this.projectData = data;
      }
    )
  }

  duplicateProject(projectId: string) {
    this.saagieApiService.duplicateProject(projectId);
    this.router.navigate(['/list-project']);
  }

}