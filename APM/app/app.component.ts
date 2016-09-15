import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <h1>{{ pageTitle }}</h1>
        <div>Mi primer Componente</div>
        <pm-products></pm-products>
    </div>
    `,
    directives: [ProductListComponent],
    providers: [ProductService, HTTP_PROVIDERS]
})
export class AppComponent {
    pageTitle: string = 'Learning AngularJS 2 like a pro';
}