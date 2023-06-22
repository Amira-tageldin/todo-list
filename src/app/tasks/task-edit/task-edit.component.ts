import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

import {Router, ActivatedRoute} from '@angular/router';
import { Task } from 'src/app/shared/models/task.model';
import { TaskStorageService } from '../task-storage.service';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  task: Task;

  /**
   * Task id form field
   */
  id;

  /**
   * Task title form field
   */
  title = new FormControl('');

  /**
   *  Task note form field
   */
  note = new FormControl('');


  constructor(private storage: TaskStorageService, private route: ActivatedRoute, private router: Router , private store : Store<fromStore.DataState>) {
  }

  /**
   * Load tasks on init
   */
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.task = this.storage.get(params.get('id'));
      this.id = this.task.id;
      this.note.setValue(this.task.note);
      this.title.setValue(this.task.title);
    });

    
  }

  /**
   * Update the task and return to the list
   */
  updateTask() {
    this.task = this.storage.update(this.id, this.title.value, this.note.value);
    this.router.navigate(['/tasks'])
  }
}
