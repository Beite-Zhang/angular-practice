import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-js-get-get-route-data',
    templateUrl: './js-get-get-route-data.component.html',
    styleUrls: ['./js-get-get-route-data.component.css']
})
export class A09JsGetGetRouteDataComponent implements OnInit {

  public queryParams: any = null;

    constructor(public route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe((data) => {
            this.queryParams = data;
        });
    }

}
