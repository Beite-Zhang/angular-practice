import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'a04-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class A04ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public parentData: any = '等待子组件修改值';
  public onChildEmit(e: any): void {
    console.log(e);
    this.parentData = e;
  }
}
