import { Component, OnInit } from '@angular/core';
import { List } from '../../models/list';
import {Task} from '../../models/task';
import { PeticionService } from '../../services/peticion.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params} from '@angular/router';
// import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [PeticionService]
})
export class TasksComponent implements OnInit {

  public title: string;
  public url: string;
  public list: List;
  public task: Task;
  public save_task;
  public status: string;

  constructor(
    private _peticionService: PeticionService,
    // private _router: Router,
    private _route: ActivatedRoute

  ) {
    this.url = Global.url;
    this.title = "Crear Tarea";
    this.task = new Task('', '' , '', '');
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params.id;

      this.getList(id);

    });
  }

  getList(id){
    this._peticionService.getList(id).subscribe(
      response =>{
        this.list = response;
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  tSubmit(form) {
    console.log(this.task);
    console.log(form);

    this._peticionService.saveTask(this.task).subscribe(
      response => {
        console.log(response);
        if (response) {
          console.log(response);
          this.save_task = response;
          this.status = 'exito';
          form.reset();
        } else {
             this.status = 'fallo';
            console.log(response);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
