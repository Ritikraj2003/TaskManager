import { Component, computed, inject, input } from '@angular/core';
import { TaskItem } from 'src/app/Models/task-item-model';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-task-list-item',
  imports: [],
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css'
})
export class TaskListItemComponent {
  taskItem = input.required<TaskItem>();
  taskService =inject(TaskService);
  StatusValues=['Todo', 'InProgress','Completed']
 action = computed(()=>{
  const taskitemvalue= this.taskItem();

 return this.StatusValues.filter(x=>taskitemvalue.Status!==x);
 });


 marksAs(text:string, UpdatedStatus:string){
this.taskService.marksAsStatus(text,UpdatedStatus);
 }
}
