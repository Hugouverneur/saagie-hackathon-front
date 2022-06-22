import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProjectComponent } from './components/detail-project/detail-project.component';
import { ListProjectComponent } from './components/list-project/list-project.component';

const routes: Routes = [
  { path: 'list-project', component: ListProjectComponent},
  { path: 'detail-project/:projectId', component: DetailProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
