import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TODOListComponent } from 'src/app/todolist/todolist.component';


const routes: Routes = [
  { path: 'todo', component: TODOListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
