import { Component,Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {EventDetails} from '../../event-details/event-details';
import{Event} from '../../../models/event.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'event-item',
  templateUrl: 'event-item.component.html'
})
export class EventItem {

    @Input() event:Event;
    maxNumAvatars:number;
    constructor( public navCtrl: NavController, public navParams: NavParams) {
      this.maxNumAvatars=3; 
  
    }

    eventTapped($event, eventItem) {
        this.navCtrl.push(EventDetails, {
            eventItem: eventItem
        }); 
      }
      toggleIsGoing(event:Event){
        event.IsGoing=!event.IsGoing;
      }
    
      toggleIsIgnored(event:Event){
        event.IsIgnored=!event.IsIgnored;
      }
}