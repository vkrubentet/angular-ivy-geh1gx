import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model = {
    username: '',
  };
  responseList;

  constructor(private loginService: LoginService) {}

  login(form: any): void {
    this.model = form;
    const username = this.model['username'];
    this.loginService.getApi(username).subscribe(
      (response) => (this.responseList = response),
      (error) => console.log('Ups! we have an error: ', error)
    );
  }
}
