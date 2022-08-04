import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  count: number = 0;
  count2: number = 0;

  ngOnInit(): void {
    // document.addEventListener('click', () => {
    // console.log('hoge');
    // });
    // document.body.addEventListener('click', () => {
    // console.log('hoge');
    // });

    // ピンチイン・ピンチアウト禁止
    // document.documentElement.addEventListener(
    //   'touchstart',
    //   function (e) {
    //     if (e.touches.length >= 2) {
    //       e.preventDefault();
    //     }
    //   },
    //   { passive: false }
    // );
    this.router.navigate(['/a01']);
  }

  @HostListener('body:click')
  onClick(): void {}
  @HostListener('document:touchstart', ['$event'])
  onTouchstart(e: TouchEvent): void {
    this.count++;
    console.log(e);
    if (e.touches.length >= 2) {
      this.count2++;
      e.preventDefault();
    }
  }
}
