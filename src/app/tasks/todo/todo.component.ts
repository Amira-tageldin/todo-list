import {Component, OnInit} from '@angular/core';

import { Store } from '@ngrx/store';
import { Task } from 'src/app/shared/models/task.model';
import { TaskStorageService } from '../task-storage.service';
import * as fromStore from 'src/app/store';
import { TaskState } from 'src/app/store/reducers/data.reducer';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks$: Observable< Task[]>;

  constructor(private storage: TaskStorageService , private store:Store<fromStore.DataState> ) {
  }

  /**
   * Load tasks on init
   */
  ngOnInit() : void{
    console.log('you are sooo clever Amira , Just trust on yourself!!!');
   this.storage.init();
  // this.tasks = this.storage.getTasks();
   //console.log(this.store) ;
  this.tasks$= this.store.select<any>(fromStore.getAllTasks);//.subscribe(e=> console.log('yaaay' , e))


  this.store.dispatch(new fromStore.LoadTask())
   
  }

  /**
   * Remove the tasks from the list
   *
   * @param id task index to remove
   */
  delete(id): void {
    this.storage.delete(id);
    //this.tasks = this.storage.getTasks();
  }
}
