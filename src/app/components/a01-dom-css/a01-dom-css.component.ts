import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a01-dom-css',
  templateUrl: './a01-dom-css.component.html',
  styleUrls: ['./a01-dom-css.component.css'],
})
export class A01DomCssComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public showAside: boolean = true;

  public switchAside(): void {
    let asideDom = document.getElementById('aside');
    if (this.showAside) {
      asideDom.style.transform = 'translate(100%, 0)';
      asideDom.style['box-shadow'] = 'none';
    } else {
      asideDom.style.transform = 'translate(0, 0)';
      asideDom.style['box-shadow'] = '0 0 10px #888888';
    }
    this.showAside = !this.showAside;
  }
}
