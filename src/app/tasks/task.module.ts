import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { StoreModule, reduceState } from '@ngrx/store';
import { effect, reducers } from '../store';
import { TodoComponent } from './todo/todo.component';
import { EffectsModule } from '@ngrx/effects';


// routes
export const ROUTES: Routes = [
  { path:'',
  component: TodoComponent},{
  
  

    path: ':id',
    component: TaskViewComponent,
  },
  {
    path: ':id/edit',
    component: TaskEditComponent,
  },
  {
    path: 'add',
    component: TaskAddComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('task', reducers) ,
    EffectsModule.forFeature(effect)
  ],
  providers: [],
  declarations: [TaskAddComponent,TodoComponent, TaskEditComponent, TaskViewComponent],
  exports: [TaskAddComponent , TaskEditComponent , TaskViewComponent],
})
export class TasksModule {}