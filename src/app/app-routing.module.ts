import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A01DomCssComponent } from './components/a01-dom-css/a01-dom-css.component';
import { Z01NotPageComponent } from './components/z01-not-page/z01-not-page.component';
import { A02ChildGetParentDataComponent } from './components/a02-child-get-parent-data/a02-child-get-parent-data.component';
import { A03ParentGetChildDataComponent } from './components/a03-parent-get-child-data/a03-parent-get-child-data.component';
import { A04ChildEventComponent } from './components/a04-child-event/a04-child-event.component';
import { A05LifecycleComponent } from './components/a05-lifecycle/a05-lifecycle.component';
import { A06HttpComponent } from './components/a06-http/a06-http.component';
import { A07RouteComponent } from './components/a07-route/a07-route.component';
import { A07GetGetRouteDataComponent } from './components/a07-route/get-get-route-data/get-get-route-data.component';
import { A08RouteComponent } from './components/a08-route/a08-route.component';
import { A08UrlGetRouteDataComponent } from './components/a08-route/url-get-route-data/url-get-route-data.component';
import { A09RouteComponent } from './components/a09-route/a09-route.component';
import { A09JsGetGetRouteDataComponent } from './components/a09-route/js-get-get-route-data/js-get-get-route-data.component';
import { A10RouteComponent } from './components/a10-route/a10-route.component';
import { A10JsUrlGetRouteDataComponent } from './components/a10-route/js-url-get-route-data/js-url-get-route-data.component';
import { A11ObserverComponent } from './components/a11-observer/a11-observer.component';
import { A12FormComponent } from './components/a12-form/a12-form.component';
import { A12ResponsiveFormComponent } from './components/a12-form/a12-responsive-form/a12-responsive-form.component';
import { A12TemplateFormComponent } from './components/a12-form/a12-template-form/a12-template-form.component';

const routes: Routes = [
    { path: '', redirectTo: '/a01', pathMatch: 'full' },
    { path: 'a01', component: A01DomCssComponent },
    { path: 'a02', component: A02ChildGetParentDataComponent },
    { path: 'a03', component: A03ParentGetChildDataComponent },
    { path: 'a04', component: A04ChildEventComponent },
    { path: 'a05', component: A05LifecycleComponent },
    { path: 'a06', component: A06HttpComponent },
    {
        path: 'a07',
        component: A07RouteComponent,
        children: [
            {
                path: 'content',
                component: A07GetGetRouteDataComponent,
            }
        ],
    },
    {
        path: 'a08',
        component: A08RouteComponent,
        children: [
            {
                path: ':id/:age',
                component: A08UrlGetRouteDataComponent,
            }
        ],
    },
    {
        path: 'a09',
        component: A09RouteComponent,
        children: [
            {
                path: 'content',
                component: A09JsGetGetRouteDataComponent,
            }
        ],
    },
    {
        path: 'a10',
        component: A10RouteComponent,
        children: [
            {
                path: ':id/:age',
                component: A10JsUrlGetRouteDataComponent,
            }
        ],
    },
    { path: 'a11', component: A11ObserverComponent },
    {
        path: 'a12',
        component: A12FormComponent,
        children: [
            { path: '', redirectTo: '/a12/responsive', pathMatch: 'full' },
            {
                path: 'responsive',
                component: A12ResponsiveFormComponent,
            },
            {
                path: 'template',
                component: A12TemplateFormComponent,
            }
        ]
    },
    { path: '**', component: Z01NotPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
