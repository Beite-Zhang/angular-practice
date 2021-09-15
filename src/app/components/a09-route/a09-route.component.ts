import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'app-a09-route',
    templateUrl: './a09-route.component.html',
    styleUrls: ['./a09-route.component.css']
})
export class A09RouteComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit(): void {
    }

    public showChildRoute(): void {
        const navigationExtras: NavigationExtras = {
            // ↓问号传参
            queryParams: { id: 1 },
            // ↓#号传参
            fragment: 'anchor'
        };
        this.router.navigate(['/a09/content'], navigationExtras);
    }

}
