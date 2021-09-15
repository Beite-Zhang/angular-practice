import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'a03-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class A03ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('childDom') childDom: any;

  public runChildRun(): void {
    console.log(`获取子组件的变量title：${this.childDom.title}`);
    this.childDom.run();
  }
}
