import { Component, OnInit } from '@angular/core';
import {List} from '../../models/list';
import { PeticionService } from '../../services/peticion.service';
// import { Task } from '../../models/task';

@Component({
  selector: 'app-createl',
  templateUrl: './createl.component.html',
  styleUrls: ['./createl.component.css'],
  providers: [PeticionService]
})
export class CreatelComponent implements OnInit {

  public title: string;
  public list: List;
  // public tasks: Task[];
  public save_list;
  public status: string;


  constructor(
    private _peticionService: PeticionService
  
  ) {
    this.title = "Crear Lista de Tareas";
    this.list = new List('');
   }

  ngOnInit(){
  }

  onSubmit(form) {
    console.log(this.list);
    this._peticionService.saveList(this.list).subscribe(
      response => {
        console.log(response);
        if (response) {
          console.log(response);
          this.save_list = response;
          this.status = 'exito';
          form.reset();
        //   setTimeout(() => {
        //   // this.status = 'fallo';
        // }, 5000);
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
