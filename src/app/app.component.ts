import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(public router: Router) {
  }

  name = 'learn-ng';

  pClick = async (ev) => {
    console.log('click p', ev);
    this.name = 'qwer';

    await new Promise(resolve => {
      setTimeout(this.changeName, 1000);
    });
  }

  changeName = () => {
    console.log(this.name);
    this.name = 'promise change';
    console.log(this.name);
  }

  jumpTodo = () => {
    this.router.navigate(['/todo']);
  }
}
