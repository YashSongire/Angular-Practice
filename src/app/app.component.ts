import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  message: string;
  isSuccess: boolean;
  isDanger: boolean;

  constructor() { }

  ngOnInit(): void {
    this.message = 'This is a success message!';
    this.isSuccess = true;
    this.isDanger = false;
  }
}
