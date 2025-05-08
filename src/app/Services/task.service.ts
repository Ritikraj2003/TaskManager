import { Injectable, isSignal, signal } from '@angular/core';
import { TaskItem } from '../Models/task-item-model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  task= signal<TaskItem[]>([]);

  addTask(Task:string,Status:string){
    this.task.update((previousState)=>{
      return[... previousState,{Task,Status}];
    })
  }

  marksAsStatus(text:string,updatedStatus:string){
    this.task.update((existingCollection)=>{
      const findtask= existingCollection.find(x =>x.Task===text);
      if(findtask){
        return [... existingCollection.filter(x=>x.Task!==text),{Task:text,Status:updatedStatus}];
      }
      else{
        return existingCollection;
      }
    })
  }
}
