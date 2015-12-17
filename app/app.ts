import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>Hi Angular2Beta</h1>'
})
class AppComponent { }
bootstrap(AppComponent);
