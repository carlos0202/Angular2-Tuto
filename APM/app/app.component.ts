import { Component } from 'angular2/core';
import {ProductListComponent } from './products/product-list.component';
@Component({
    selector: 'pm-app',
    template: `
    <div>
        <h1>{{ pageTitle }}</h1>
        <div>Mi primer Componente</div>
        <pm-products></pm-products>
    </div>
    `,
    directives: [ProductListComponent]
})
export class AppComponent {
    pageTitle: string = 'Learning AngularJS 2 like a pro';
}