import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'a07-get-get-route-data',
    templateUrl: './get-get-route-data.component.html',
    styleUrls: ['./get-get-route-data.component.css']
})
export class A07GetGetRouteDataComponent implements OnInit {

    public queryParams: any = null;

    constructor(public route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe((data) => {
            this.queryParams = data;
        });
    }

}
