import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core';

interface Creater{
  name: string;
}

@Component({
    selector: 'my-app',
    template: '<h1>Hi Angular2Beta by {{creater.name}}</h1>'
})

class AppComponent {
  public creater: Creater = {name:"Jagaa"};
};

bootstrap(AppComponent);
