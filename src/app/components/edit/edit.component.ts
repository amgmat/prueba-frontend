import { Component, OnInit } from '@angular/core';
import {List} from '../../models/list';
import { PeticionService } from '../../services/peticion.service';
import { Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [PeticionService]
})
export class EditComponent implements OnInit {

  public title: string;
  public list: List;
  public save_list;
  public status: string;


  constructor(
    private _peticionService: PeticionService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = "Editar Lista de Tareas";
    // this.list = new List('');

   }


   ngOnInit() {
    this._route.params.subscribe(params =>{
      let id = params.id;

      this.getList(id);
    });
  }

  getList(id){
    this._peticionService.getList(id).subscribe(
      response => {
        this.list = response;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form){
    console.log(this.list);
    this._peticionService.updateList(this.list).subscribe(
      response => {
        // console.log(response);
        if (response) {
          console.log(response);
          this.save_list = response;
          this.status = 'exito';
        } else {
             this.status = 'fallo';
        }
        this._router.navigate(['/lista/' + this.save_list.id]);
      },
      error => {
        console.log(<any>error);
      }
    );
  }


}
