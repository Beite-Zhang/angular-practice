import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Z01NotPageComponent } from './components/z01-not-page/z01-not-page.component';
import { A02ChildGetParentDataComponent } from './components/a02-child-get-parent-data/a02-child-get-parent-data.component';
import { A02ChildComponent } from './components/a02-child-get-parent-data/child/child.component';
import { A02ParentComponent } from './components/a02-child-get-parent-data/parent/parent.component';
import { A03ParentGetChildDataComponent } from './components/a03-parent-get-child-data/a03-parent-get-child-data.component';
import { A03ChildComponent } from './components/a03-parent-get-child-data/child/child.component';
import { A03ParentComponent } from './components/a03-parent-get-child-data/parent/parent.component';
import { A04ChildEventComponent } from './components/a04-child-event/a04-child-event.component';
import { A04ChildComponent } from './components/a04-child-event/child/child.component';
import { A04ParentComponent } from './components/a04-child-event/parent/parent.component';
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

@NgModule({
    declarations: [
        AppComponent,
        Z01NotPageComponent,
        A02ChildGetParentDataComponent,
        A02ChildComponent,
        A02ParentComponent,
        A03ParentGetChildDataComponent,
        A03ChildComponent,
        A03ParentComponent,
        A04ChildEventComponent,
        A04ChildComponent,
        A04ParentComponent,
        A05LifecycleComponent,
        A06HttpComponent,
        A07RouteComponent,
        A07GetGetRouteDataComponent,
        A08RouteComponent,
        A08UrlGetRouteDataComponent,
        A09RouteComponent,
        A09JsGetGetRouteDataComponent,
        A10RouteComponent,
        A10JsUrlGetRouteDataComponent,
        A11ObserverComponent,
        A12FormComponent,
        A12ResponsiveFormComponent,
        A12TemplateFormComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientJsonpModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
