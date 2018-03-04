import { NgModule, Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import {EventsService} from './events.service'
@NgModule({
    imports: [
        HttpModule
    ],
    providers: [EventsService],
    exports: []


})

export class ServicesModule { }

