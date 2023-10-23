import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {
  title = 'ng-sample';

  constructor(private router: Router) {

  }

  onClick() {
    this.router.navigate(['sharing']);
  }

  ngOnInit(): void {
      console.log('app-component')
  }
}
