import { Component, OnInit } from '@angular/core';
import { List } from '../../models/list';
import { Task} from '../../models/task';
import { PeticionService } from '../../services/peticion.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detailt',
  templateUrl: './detailt.component.html',
  styleUrls: ['./detailt.component.css'],
  providers: [PeticionService]
})
export class DetailtComponent implements OnInit {
  public url: string;
  // public list: List;
  public task: Task;
  public tasks: Task[];
  public confirm: boolean;

  constructor(
    private _peticionService: PeticionService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.confirm = false;
   }


  ngOnInit() {
    this._route.params.subscribe(params =>{
      let id = params.id;

      this.getTask(id);

      this.getTasks();
    });
  }

  getTasks(){
    this._peticionService.getTasks().subscribe(
      response => {
        console.log(response);
        if (response) {
          this.tasks = response;
        } else {
          console.log(response);
        }
      },
      error => {
        console.log(<any>error);
      }

    );
  }

  getTask(id){
    this._peticionService.getTask(id).subscribe(
      response =>{
        this.task = response;
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  setConfirm(confirm){
    this.confirm = confirm;
  }

  deleteTask(id){
    this._peticionService.deleteTask(id).subscribe(
      response => {
        console.log(response);
        if (response == null) {
          console.log('borrado');
          this._router.navigate(['/tareas']);
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}
