import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Seniordriveservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/


@Injectable()
export class Seniordriveservice {
	data : any;
	apiUrl = 'http://sdapi.vincentarsene.net:3000/api';

  constructor(public http: Http) {
    console.log('Hello Seniordriveservice Provider');
  }
 
	getDeplacements() {
		if (this.data) {
		// already loaded data
		return Promise.resolve(this.data);
		}

		// don't have the data yet
		return new Promise(resolve => {
			// We're using Angular HTTP provider to request the data,
			// then on the response, it'll map the JSON data to a parsed JS object.
			// Next, we process the data and resolve the promise with the new data.
			this.http.get(this.apiUrl+'/deplacements')
			.map(res => res.json())
			.subscribe(data => {
			// we've got back the raw data, now generate the core schedule data
			// and save the data for later reference
			this.data = data.deplacements;
			resolve(this.data);
			});
		});
	}

	getDeplacement(id) {
		//if (this.data) {
		// already loaded data
		//return Promise.resolve(this.data);
		//}

		// don't have the data yet
		return new Promise(resolve => {
			// We're using Angular HTTP provider to request the data,
			// then on the response, it'll map the JSON data to a parsed JS object.
			// Next, we process the data and resolve the promise with the new data.
			this.http.get(this.apiUrl+'/deplacements/'+id)
			.map(res => res.json())
			.subscribe(data => {
			// we've got back the raw data, now generate the core schedule data
			// and save the data for later reference
			this.data = data.deplacement[0];
			console.log('model getdeplacement * data of deplacement '+this.data.id+' *');
			console.log(this.data);
			resolve(this.data);
			});
		});
	}
	
}