import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'a08-url-get-route-data',
    templateUrl: './url-get-route-data.component.html',
    styleUrls: ['./url-get-route-data.component.css']
})
export class A08UrlGetRouteDataComponent implements OnInit {

    public params: any = null;

    constructor(public route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((data) => {
            this.params = data;
        });
    }

}
