import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToSecondPage(){
    console.log("second page")
    this.navCtrl.push(TestPage , {'data':'d', 'data2' : 'd2'})

  }
}
