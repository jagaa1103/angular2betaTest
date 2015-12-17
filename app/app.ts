import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core';

interface Creater{
  name: string;
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html'
})

class AppComponent {
  public creater: Creater = {name:"Jagaa"};
  public fruits = Fruits;
  selectedFruit(fruit){
    alert('You selected '+fruit);
  }
}

var Fruits: [string] = ['Apple', 'Banana', 'Lemon', 'Coconut'];

bootstrap(AppComponent);
