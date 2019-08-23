import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task';
import { PeticionService } from '../../services/peticion.service';
import { Router , ActivatedRoute, Params} from '@angular/router';
import {List} from '../../models/list';
import { Global } from '../../services/global';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css'],
  providers: [PeticionService]
})
export class EdittaskComponent implements OnInit {

  public title: string;
  public url: string;
  public task: Task;
  public list: List;
  public save_task;
  public status: string;

  constructor(
    private _peticionService: PeticionService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { 
        this.url = Global.url;
        this.title = "Editar Tarea";
        // this.task = new Task('', '' , '', '');

    }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params.id;
      // this.getList(id);
      this.getTask(id);
    });
  }

  // getList(id){
  //   this._peticionService.getList(id).subscribe(
  //     response =>{
  //       this.list = response;
  //     },
  //     error =>{
  //       console.log(<any>error);
  //     }
  //   );
  // }

getTask(id){
  this._peticionService.getTask(id).subscribe(
    response => {
      this.task = response;
    },
    error => {
      console.log(<any>error);
    }
  );
}

tSubmit(form){
  console.log(this.task);
  // console.log(form);
  this._peticionService.updateTask(this.task).subscribe(
    response => {
      // console.log(response);
      if (response) {
        console.log(response);
        this.save_task = response;
        this.status = 'exito';
      } else {
        this.status = 'fallo';
      }
      this._router.navigate(['/tarea/' + this.save_task.id]);
    },
    error => {
      console.log(<any>error);
      // console.log(this.task);
    }
  );
}

}
