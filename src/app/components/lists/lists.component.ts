import { Component, OnInit } from '@angular/core';
import { List } from '../../models/list';
import { PeticionService } from '../../services/peticion.service';
// import { Global } from '../../services/global';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [PeticionService]
})
export class ListsComponent implements OnInit {
  public lists: List[];

  constructor(
    private _peticionService: PeticionService
  ) { }

  ngOnInit() {
    this.getLists();
  }

  getLists(){
    this._peticionService.getLists().subscribe(
      response => {
        console.log(response);
        if (response) {
          this.lists = response;
        } else {
          console.log(response);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
