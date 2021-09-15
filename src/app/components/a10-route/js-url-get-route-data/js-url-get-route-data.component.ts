import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-js-url-get-route-data',
    templateUrl: './js-url-get-route-data.component.html',
    styleUrls: ['./js-url-get-route-data.component.css']
})
export class A10JsUrlGetRouteDataComponent implements OnInit {

    public params: any = null;

    constructor(public route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((data) => {
            this.params = data;
        });
    }

}
