import { Component,ViewChild } from '@angular/core';
import {Event} from '../../models/event.model';
import { NavController, NavParams ,Navbar} from 'ionic-angular';


@Component({
  selector: 'event-details',
  templateUrl: 'event-details.html'
})
export class EventDetails {
  @ViewChild(Navbar) navBar: Navbar;
  selectedEvent: Event;
  staticDetails:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedEvent = navParams.get('eventItem');
    this.staticDetails="Come and join us this summer, cycling by tree-lined canals and atop the the dykes, exploring the pretty villages of the Dutch countryside as we make our way to the bright lights of Amsterdam - and beyond! This hostel-based cycling holiday will introduce you to the beautiful and lesser-known landscapes of the Netherlands as we visit the beaches, the castles, the historic cities and the nature reserves of what is famously known as a paradise for cycling.";
    this.navCtrl.swipeBackEnabled=true;
  }
  

}
