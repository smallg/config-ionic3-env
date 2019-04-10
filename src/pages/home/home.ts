import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EnvironmentProvider } from '../../providers/environment';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, private environmentProvider: EnvironmentProvider) {
        this.environmentProvider.getApi();
    }

}
