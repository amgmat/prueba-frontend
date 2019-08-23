import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {List} from '../models/list';
import { Task } from '../models/task';
import { Global } from './global';

@Injectable()

export class PeticionService{
    public url: string;
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    saveList(list: List): Observable<any>{
        let params = JSON.stringify(list);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + '/task_lists', params, {headers: headers});
    }

    getLists(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + '/task_lists', {headers: headers});
    }

    getList(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + '/task_lists/' + id, {headers: headers});
    }

    deleteList(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.delete(this.url + '/task_lists/' + id, {headers: headers});
    }

    updateList(list): Observable<any> {
        let params = JSON.stringify(list);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url + '/task_lists/' + list.id, params,{headers: headers});
}

saveTask(task: Task): Observable<any> {
    let params = JSON.stringify(task);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + '/tasks', params, {headers: headers});
}

getTasks(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + '/tasks', {headers: headers});
}

getTask(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + '/tasks/' + id, {headers: headers});
}

deleteTask(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + '/tasks/' + id, {headers: headers});
}

updateTask(task): Observable<any> {
    let params = JSON.stringify(task);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url + '/tasks/' + task.id, params,{headers: headers});
}
}