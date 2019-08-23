import { Component, OnInit } from '@angular/core';
import { List } from '../../models/list';
import { Task} from '../../models/task';
import { PeticionService } from '../../services/peticion.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [PeticionService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public list: List;
  public tasks: Task;
  public task: Task[];
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
    this._route.params.subscribe(params => {
      let id = params.id;

      this.getList(id);

      this.getTasks();
    });
  }

  getTasks(){
    this._peticionService.getTasks().subscribe(
      response =>{
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
    )
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

  setConfirm(confirm){
    this.confirm = confirm;
  }

  deleteList(id){
    this._peticionService.deleteList(id).subscribe(
      response => {
        console.log(response);
        if (response == null) {
          console.log('borrado');
          this._router.navigate(['/ver-listas']);
        }
      },
      error =>{
        console.log(<any>error);
      }
      
    );
  }

}
