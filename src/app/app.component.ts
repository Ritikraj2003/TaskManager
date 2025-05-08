import { Component, computed, inject } from '@angular/core';
import { TaskFormComponent } from './Components/task-form/task-form.component';
import { TaskListComponent } from "./Components/task-list/task-list.component";
import { TaskService } from './Services/task.service';

@Component({
  selector: 'app-root',
  standalone: true,  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TaskFormComponent, TaskListComponent]  
})
export class AppComponent {
  
  TaskService =inject(TaskService);

 private tasks= this.TaskService.task

  todoItems = computed(()=>{
    const task = this.tasks();
    return task.filter(x=>x.Status==='Todo');
  });

  inprogressItem = computed(()=>{
    const task = this.tasks();
    return task.filter(x=>x.Status==='InProgress');
  });


  completedItem = computed(()=>{
    const task = this.tasks();
    return task.filter(x=>x.Status==='Completed');
  });
}
