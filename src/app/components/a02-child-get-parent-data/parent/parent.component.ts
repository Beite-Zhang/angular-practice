import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'a02-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class A02ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public title: string = '这是父组件的参数title';

  private data: string = '这是父组件的私有属性data.';

  public run(): void {
    console.log('这是父组件的run()方法');
  }
}
