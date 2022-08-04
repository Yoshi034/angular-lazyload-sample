import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a01',
  templateUrl: './a01.component.html',
  styleUrls: ['./a01.component.css'],
})
export class A01Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // if (document.querySelector('body')) {
    //   console.log('hugr');
    //   document.addEventListener('click', () => {
    //     console.log('hoge');
    //   });
    // }
  }

  onClick() {
    window.location.href = 'https://www.android.com/payapp';
  }
}
