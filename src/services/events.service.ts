import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class EventsService{
    constructor(public http: Http){}


    getAllEvents():Observable<any>{
        return this.http.get("https://tsh-app.firebaseio.com/events.json").map((response: Response) =>
        <any>response.json());

    }

}