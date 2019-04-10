import { Injectable } from '@angular/core';
import { env_api } from '@app/env';

@Injectable()
export class EnvironmentProvider {

    apiUrl = env_api;

    constructor() {
        console.log('Hello EnvironmentProvider Provider');
    }

    getApi() {
        console.log(this.apiUrl)
        return this.apiUrl
    }

}
