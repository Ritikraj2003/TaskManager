import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

taskService = inject(TaskService)


Taskform = new FormGroup({
Task:new FormControl('',{nonNullable:true}),
Status: new FormControl('Todo',{nonNullable:true})
});


Onsubmit(){
  const rawvalue=this.Taskform.getRawValue();
this.taskService.addTask(rawvalue.Task,rawvalue.Status)
  this.Taskform.reset();
}

}
