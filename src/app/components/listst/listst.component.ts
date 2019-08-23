import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../../services/peticion.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-listst',
  templateUrl: './listst.component.html',
  styleUrls: ['./listst.component.css'],
  providers: [PeticionService]
})
export class ListstComponent implements OnInit {
public tasks: Task[];
  constructor(
    private _peticionService: PeticionService
  ) { }

  ngOnInit() {
    this.getTasks();
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

}
