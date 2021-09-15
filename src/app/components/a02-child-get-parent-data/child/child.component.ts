import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'a02-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class A02ChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() title: string;
  @Input() parentRun: any;
  @Input() parent: any;
}
