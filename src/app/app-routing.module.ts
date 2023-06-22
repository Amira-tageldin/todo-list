import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoComponent} from './tasks/todo/todo.component';

const routes: Routes = [
  
  // Always go on /tasks path
  { path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/task.module').then(m => m.TasksModule)
    ,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
