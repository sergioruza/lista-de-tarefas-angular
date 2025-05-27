import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Tarefa } from '../../../Tarefa';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private taskService: TaskService) { }


  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tarefas = data;
      console.log(data);

    })
  }
}
