import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'a04-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class A04ChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() private emitAction = new EventEmitter();

  public onClick(): void {
    this.emitAction.emit({
      name: '带个参数出去',
      msg: '嘿嘿嘿',
      warning: '父组件接收参数必须使用$event',
    });
  }
}
