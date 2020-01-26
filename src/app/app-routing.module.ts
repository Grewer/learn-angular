import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TODOListComponent } from 'src/app/todolist/todolist.component';
import { ReactiveFormComponent } from 'src/app/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from 'src/app/template-driven-form/template-driven-form.component';


const routes: Routes = [
  { path: 'todo', component: TODOListComponent },
  { path: 'react-form', component: ReactiveFormComponent },
  { path: 'template-form', component: TemplateDrivenFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
