import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'a03-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class A03ChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public title: string = '标题';
  public run(): void {
    console.log('子组件的方法');
  }
}
