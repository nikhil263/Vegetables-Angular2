import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IVegetable } from './vegetables';

@Injectable()
export class VegetableService {
    private _productUrl = 'api/vegetable/vegetables.json';

    constructor(private _http: Http) { }

    getVegetables(): Observable<IVegetable[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IVegetable[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getVegetable(id: number): Observable<IVegetable> {
        return this.getVegetables()
            .map((veg: IVegetable[]) => veg.find(p => p.vegetableId === id));
    }

 addVegetable(vegetable: IVegetable) {        
        let body = JSON.stringify(vegetable);                 
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._productUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

  private extractData(res: Response) {
        let body = res.json();
       // return body.data || {};
    }
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
