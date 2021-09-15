# 1.安装Angular

```
npm install -g @angular/cli
cnpm install -g @angular/cli
```



# 2.创建项目

```
ng new angulardemo --skip-install

# 如果默认要路由
ng new angulardemo --routing --skip-install

# 默认样式 css|scss|sass|less|styl
ng new angulardemo --routing --style=css --skip-install

# -S 不需要测试模块文件
ng new angulardemo --routing --style=css --skip-install -S
```

> - `--skip-install`跳过依赖安装。
> - `--routing`：在创建模块或项目的时候，该指令指定了一个路由模块，并将这个路由模块导入到我们创建的这个模块中。在创建项目的时候会多一步添加路由依赖的操作。



# 3.运行项目

```
cd angulardemo
cnpm i
ng serve --open
```



# 4.文件目录

具体：https://www.bilibili.com/video/BV1bt411e71b?p=2中去看。

- e2e：端对端测试文件。
- node_modules：项目依赖。
- src：源码。
- .editorconfig：编辑器的控制文件。
- .gitignore：git忽略名单。
- angular.json：angular的配置文件。
- package.json：项目的配置文件。
- tsconfig.json：TS配置文件。

树指令：

```
tree [path] [/f] [/a]
# /F 递归列出所有文件
# /A 只查看文件夹, 忽略文件


# 样例
tree C:\Users\Administrator\.android /f >F:\path\android-tree.txt
```



cmd运行：

```
# 当前目录
tree /f >tree.txt
```

> 当然这个文件太多了，就不要运行了。。。

## 附件：tree命令行参数

- -a 显示所有文件和目录。
- -A 使用ASNI绘图字符显示树状图而非以ASCII字符组合。
- -C 在文件和目录清单加上色彩，便于区分各种类型。
- -d 显示目录名称而非内容。
- -D 列出文件或目录的更改时间。
- -f 在每个文件或目录之前，显示完整的相对路径名称。
- -F 在执行文件，目录，Socket，符号连接，管道名称名称，各自加上"*","/","=","@","|“号。
- -g 列出文件或目录的所属群组名称，没有对应的名称时，则显示群组识别码。
- -i 不以阶梯状列出文件或目录名称。
- -I 不显示符合范本样式的文件或目录名称。
- -l 如遇到性质为符号连接的目录，直接列出该连接所指向的原始目录。
- -n 不在文件和目录清单加上色彩。
- -N 直接列出文件和目录名称，包括控制字符。
- -p 列出权限标示。
- -P 只显示符合范本样式的文件或目录名称。
- -q 用”?"号取代控制字符，列出文件和目录名称。
- -s 列出文件或目录大小。
- -t 用文件和目录的更改时间排序。
- -u 列出文件或目录的拥有者名称，没有对应的名称时，则显示用户识别码。
- -x 将范围局限在现行的文件系统中，若指定目录下的某些子目录，其存放于另一个文件系统上，则将该子目录予以排除在寻找范围外。



# 5.根模块JS文件

```javascript
/*这个文件是Angular 根模块，告诉Angular如何组装应用*/

//BrowserModule，浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';  
//Angular核心模块
import { NgModule } from '@angular/core';
//根组件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

/*@NgModule装饰器, @NgModule接受一个元数据对象，告诉 Angular 如何编译和启动应用*/
@NgModule({
  /*配置当前项目运行的的组件*/
  declarations: [
    AppComponent, NewsComponent, HomeComponent, HeaderComponent
  ],
  /*配置当前模块运行依赖的其他模块*/
  imports: [
    BrowserModule
  ],
  /*配置项目所需要的服务*/
  providers: [],
  /* 指定应用的主视图（称为根组件） 通过引导根AppModule来启动应用  ，这里一般写的是根组件*/
  bootstrap: [AppComponent]
})

//根模块不需要导出任何东西，   因为其它组件不需要导入根模块
export class AppModule { }

```

> TODO：模块和服务的区别？

# 6.根组件JS文件

```js
//引入核心模块里面的Component
import { Component } from '@angular/core';

@Component({
  //使用这个组件的名称
  selector: 'app-root',
  //html 
  templateUrl: './app.component.html',
  //css
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //定义属性
  title = 'angulardemo01';
  //构造函数
  constructor(){}
}
```



# 7.创建组件

```
ng g component components/my-div
```

> 这样就会在指定文件夹中生成一个组件，包括四个文件：HTML、TS、CSS、测试文件。
>
> 同时也会在主模块中添加这个组件依赖。
>
> 还有就是注意组件的名称，尽量不要使用数字和特殊符号。就算使用了数字也不要单独放在特殊符号中间，那样组件会不生效。如下：
>
> - my-01-div：报错，无效名称。
> - my-div-01：不报错，但也是无效组件。
> - my01-div：生效。



# 8.一般属性

TS：

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-div',
  templateUrl: './my-div.component.html',
  styleUrls: ['./my-div.component.css'],
})
export class MyDivComponent implements OnInit {
  public title: string = '我是一个标题';

  constructor() {}

  ngOnInit(): void {}
}

```

> 声明属性的几种方式：
> - public        共有 \*（默认） 可以在这个类里面使用、也可以在类外面使用
> - protected  保护类型           他只有在当前类和它的子类里面可以访问
> - private      私有                  只有在当前类才可以访问这个属性

HTML：

```html
<p>my-div works!</p>
<h4>title变量的值：{{title}}</h4>

```



组件使用：

```html
<div style="text-align: center;">
  <h1>项目首页</h1>
  <my-div></my-div>
</div>

```



# 9.页面初始化数据

TS：

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-div',
  templateUrl: './my-div.component.html',
  styleUrls: ['./my-div.component.css'],
})
export class MyDivComponent implements OnInit {
  public title: string = '我是一个标题';

  onInit() {
    // 异步请求获取数据
    this.title = '我是一个标题-修改后的数据';
  }

  constructor() {
    this.onInit();
  }

  ngOnInit(): void {}
}

```

> 当然，很多很多其他的生命周期函数。

# 10.绑定属性

使用：`[]`绑定，相当于vue的`:`。

TS：

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-div',
  templateUrl: './my-div.component.html',
  styleUrls: ['./my-div.component.css'],
})
export class MyDivComponent implements OnInit {
  public porpTitle: string = '我是一个标题';

  constructor() {}

  ngOnInit(): void {}
}

```



HTML：

```html
<p>my-div works!</p>
<h4 [title]="porpTitle">porpTitle变量的值：{{porpTitle}}</h4>

```



# 11.插入HTML字符串

TS：

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-div',
  templateUrl: './my-div.component.html',
  styleUrls: ['./my-div.component.css'],
})
export class MyDivComponent implements OnInit {
  public content: string = '<span>HTML字符串</span>';

  constructor() {}

  ngOnInit(): void {}
}

```



HTML：

```html
<p>my-div works!</p>
<h4>content变量是带有标签的，使用花括号就进行转义了：{{content}}</h4>
<hr>
<h4>应该使用[innerHtml]="content"插入HTML内容。</h4>
<h4 [innerHtml]="content"></h4>

```



# 12.循环

TS：

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-div',
  templateUrl: './my-div.component.html',
  styleUrls: ['./my-div.component.css'],
})
export class MyDivComponent implements OnInit {
  public cars: any[] = [
    {
      cate: '宝马',
      list: [
        {
          title: '宝马x1',
          price: '30万',
        },
        {
          title: '宝马x2',
          price: '30万',
        },
        {
          title: '宝马x3',
          price: '40万',
        },
      ],
    },
    {
      cate: '奥迪',
      list: [
        {
          title: '奥迪q1',
          price: '40万',
        },
        {
          title: '奥迪q2',
          price: '40万',
        },
        {
          title: '奥迪q3',
          price: '30万',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

```



HTML：

```html
<p>my-div works!</p>
<ul style="background: skyblue;">
  <li *ngFor="let item of cars;let i = index;">
    <h2>第{{i+1}}种车{{item.cate}}</h2>
    <ol style="background: turquoise;">
      <li *ngFor="let car of item.list">{{car.title}}---{{car.price}}</li>
    </ol>
  </li>
</ul>

```



# 13.使用本地资源

将图片放到`assets`文件夹中，然后在HTML中直接使用。

```html
<img src="assets/images/1.jpg" alt="assets中的图片">
<img [src]="picUrl" alt="变量中的字符串路径">

```



# 14.if判断

TS：

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-div',
  templateUrl: './my-div.component.html',
  styleUrls: ['./my-div.component.css'],
})
export class MyDivComponent implements OnInit {
  public flag: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}

```



HTML：

```html
<p>my-div works!</p>
<ng-container *ngIf="flag; else elseTemplate">
  <h3>flag变量为true.</h3>
</ng-container>
<ng-template #elseTemplate>
  <h3>flag变量为false.</h3>
</ng-template>

```



# 15.Swatch判断

TS：

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-div',
  templateUrl: './my-div.component.html',
  styleUrls: ['./my-div.component.css'],
})
export class MyDivComponent implements OnInit {
  public orderStatus: number = 2;

  constructor() {}

  ngOnInit(): void {}
}

```



HTML：

```html
<p>my-div works!</p>
<span [ngSwitch]="orderStatus">
  <p *ngSwitchCase="1">表示已经支付</p>
  <p *ngSwitchCase="2">支付并且确认订单</p>
  <p *ngSwitchCase="3">表示已经发货</p>
  <p *ngSwitchCase="4">表示已经收货</p>
  <p *ngSwitchDefault>无效订单</p>
</span>

```



# 16.动态Class

[官方案例](https://angular.cn/guide/template-syntax#class-binding)

HTML：

```html
<style>
  .red {
    color: tomato;
  }

</style>
<p>my-div works!</p>
<div [ngClass]="{'red': true}">Hello!</div>

```



# 17.动态Style

[官方案例](https://angular.cn/guide/template-syntax#style-binding)

HTML：

```html
<p>my-div works!</p>
<div [ngStyle]="{'color': 'red'}">Hello!</div>

```



# 18.一般管道

HTML：

```html
<!-- ↓↓↓转换成大写↓↓↓ -->
<p>{{str | uppercase}}</p>

<!-- ↓↓↓转换成小写↓↓↓ -->
<p>{{str | lowercase}}</p>

<!-- ↓↓↓日期格式转换↓↓↓ -->
<p>{{today | date:'yyyy-MM-dd HH:mm:ss' }}</p>

<!-- ↓↓↓接收的参数格式为{最少整数位数}.{最少小数位数}-{最多小数位数}↓↓↓ -->
<!-- ↓↓↓保留2~4位小数↓↓↓ -->
<p>{{p | number:'1.2-4'}}</p>

<!-- ↓↓↓JavaScript 对象序列化↓↓↓ -->
<p>{{ { name: 'semlinker' } | json }}</p>

<!-- ↓↓↓截取↓↓↓ -->
<!-- Output: sem -->
<p>{{ 'semlinker' | slice:0:3 }}</p>

<!-- ↓↓↓管道链↓↓↓ -->
<!-- Output: SEM -->
<p>{{ 'semlinker' | slice:0:3 | uppercase }}</p>
```



# 19.自定义管道（未完成）



# 20.创建TS类

[官网操作](https://angular.cn/guide/displaying-data#using-the-hero-class)

```
ng generate class hero
```



```js
export class Hero {
  constructor(
    public id: number,
    public name: string) { }
}
```



# 21.事件绑定

[官方案例](https://angular.cn/guide/template-syntax#event-binding-event)

TS：

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-div',
  templateUrl: './my-div.component.html',
  styleUrls: ['./my-div.component.css'],
})
export class MyDivComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public run(event: any): void {
    console.log('事件执行');
    console.log('事件对象', event.target);
  }
  public sayHello(): void {
    console.log('Hello');
  }
}

```



HTML：

```html
<p>my-div works!</p>
<button (click)="run($event)">执行事件</button>
<button (click)="sayHello()">SayHello</button>

```



# 23.自定义事件

组件中：

TS：

```js
import { Output, EventEmitter } from '@angular/core';
// 使用装饰器定义一个事件
@Output() deleteRequest = new EventEmitter<Item>();

delete() {
    // 发布这个事件
  	this.deleteRequest.emit(this.item);
}
```



# 24.双向绑定

## 24.1.表单双向绑定

主模块导入FoemsModule。

```js
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular
/* . . . */
@NgModule({
/* . . . */

  imports: [
    BrowserModule,
    FormsModule // <--- import into the NgModule
  ],
/* . . . */
})
export class AppModule { }
```



TS：

```js
import { Component, OnInit } from '@angular/core';

export type SexType = 'man' | 'woman';
export class Student {
  public name: string;
  public sex: SexType;
  public city: string;
  constructor() {}
}

@Component({
  selector: 'my-div',
  templateUrl: './my-div.component.html',
  styleUrls: ['./my-div.component.css'],
})
export class MyDivComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public student: Student = new Student();
  public cityList: string[] = ['', '北京', '上海', '杭州', '长沙'];
  public myFoodList: any[] = [
    { name: '腐竹', checked: false },
    { name: '炸鸡', checked: false },
    { name: '烤鸭', checked: false },
    { name: '牛排', checked: false },
  ];
}

```



HTML：

```html
<!-- 原生写法：value 属性和 input 事件 -->
<label for="without">without NgModel:</label>
<input [value]="currentItem.name" (input)="currentItem.name=$event.target.value" id="without">

<!-- ngModel写法： -->
<p>my-div works!</p>
<div style="width: 400px;border: 1px solid #ccc;margin: 0 auto;padding: 32px;text-align: left;">
  <div style="margin-bottom: 16px;">
    <label for="username">姓名：</label>
    <input type="text" id="username" [(ngModel)]="student.name">
  </div>
  <div style="margin-bottom: 16px;">
    <label>性别：</label>
    <input type="radio" name="sex" id="man" value="man" [(ngModel)]="student.sex"><label for="man">男</label>
    <input type="radio" name="sex" id="woman" value="woman" [(ngModel)]="student.sex"><label for="woman">女</label>
  </div>
  <div style="margin-bottom: 16px;">
    <label for="city">城市：</label>
    <select name="city" id="city" [(ngModel)]="student.city">
      <option [value]="item" *ngFor="let item of cityList">{{item}}</option>
    </select>
  </div>
  <div>
    <label>喜欢的食物：</label>
    <span *ngFor="let item of myFoodList">
      <input type="checkbox" [name]="'check_'+item.name" [id]="'check_'+item.name" [(ngModel)]="item.checked"><label
        [for]="'check_'+item.name">{{item.name}}</label>
    </span>
  </div>
</div>
<hr>
<h3>{{student|json}}</h3>
<hr>
<h3>{{myFoodList|json}}</h3>

```

> `ngModel` 输入属性会设置该元素的值，并通过 `ngModelChange` 的输出属性来监听元素值的变化。



## 24.2.组件双向绑定

这里又表单的双向绑定，也有组件的双向绑定。

一般变量的绑定是单向的。就是由Model流向View。但是当View组件具备修改Model的功能时，就会有双向绑定。当修改事件一发生就将Model中的值也响应改变。



1. 使用`[(...)]`双向绑定数据时，子组件改变该值之后，会自动绑定回父组件的Model中。

2. 当然也可以使用子组件的事件提交来通知父组件修改Model。
3. 而对应的`[(ngModel)]`是Angular封装的一个指令。



[官方文档](https://angular.cn/guide/template-syntax#two-way-binding-)

[官方案例](https://stackblitz.com/angular/kopaaayoaraa?file=src%2Fapp%2Fapp.component.html)

### 24.2.1.组件TS

```js
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent {


  @Input()  size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

}

```



### 24.2.2.组件HTML

```html
<div>
  <button (click)="dec()" title="smaller">-</button>
  <button (click)="inc()" title="bigger">+</button>
  <label [style.font-size.px]="size">FontSize: {{size}}px</label>
</div>
```



### 24.2.3.根组件HTML

```html
<div [style.font-size.px]="fontSizePx">展示文字!</div>
<label>字体大小 (px): <input [(ngModel)]="fontSizePx"></label>

<app-sizer [(size)]="fontSizePx"></app-sizer>
<app-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event"></app-sizer>

```



## 24.3.表单实战

表单的一些知识，两种表单的区别等：[官方文档](https://angular.cn/guide/forms-overview)。



### 24.3.1.响应式表单

[官方文档](https://angular.cn/guide/reactive-forms)

[官方案例](https://stackblitz.com/angular/enlvvlgmyqp?file=src%2Fapp%2Fapp.component.ts)



### 24.3.2.模板驱动表单

[官方文档](https://angular.cn/guide/forms)

[官方案例](https://stackblitz.com/angular/ardqrnmgkbp?file=src%2Fapp%2Fhero-form%2Fhero-form.component.html)



## 24.4.DOM操作表单

TS：

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-div',
  templateUrl: './my-div.component.html',
  styleUrls: ['./my-div.component.css'],
})
export class MyDivComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public onSubmit(): void {
    let dom: any = document.getElementById('username');
    console.log(dom.value);
  }
}

```



HTML：

```html
<p>my-div works!</p>
<input type="text" id="username">
<button (click)="onSubmit()">提交</button>

```



# 25.服务应用

## 25.1.创建服务

服务相当于给不同组件提供相同的方法。

```
ng g service services/service-name
```



## 25.2.编写服务

服务代码（`storage.service.ts`）：

```js
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  public sayHello(): void {
    console.log('这是一个服务');
  }
}

```



## 25.3.注册服务

模块（`app.moudule.ts`）中引入服务：

```js
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyDivComponent} from './components/my-div/my-div.component';

import {StorageService} from './services/storage.service';

@NgModule({
  declarations: [AppComponent, MyDivComponent],
  imports: [BrowserModule],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

```



## 25.4.使用服务

在组件中使用服务：

推荐一下这种依赖注入的方式使用。

```js
import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'my-div',
  templateUrl: './my-div.component.html',
  styleUrls: ['./my-div.component.css'],
})
export class MyDivComponent implements OnInit {
  constructor(public storage: StorageService) {
    this.storage.sayHello();
  }
}

```



不推荐这样直接导入变量。

```js
import {Component} from '@angular/core';
import {StorageService} from '../../services/storage.service';

let storage = new StorageService();

@Component({
  selector: 'my-div',
  templateUrl: './my-div.component.html',
  styleUrls: ['./my-div.component.css'],
})
export class MyDivComponent implements OnInit {
  constructor() {
    storage.sayHello();
  }
}

```



# 26.DOM操作

可以使用原生JS操作DOM，也可以使用Angular的ViewChild来操作DOM。

当然，操作DOM节点就要在HTML文档将所有DOM节点加载完成之后才能操作DOM节点。Angular中的一些生命周期如下：

- ngOnInit：组件和指令初始化完成，并不是DOM节点加载完成。当然，在这里也可以操作没有需要Angular处理的DOM节点（没有指令和变量）。
- ngAfterViewInit：视图加载完成之后触发的方法。这个时候所有的DOM都加载完成了。



## 26.1.原生JS操作

```js
import { Component } from '@angular/core';

@Component({
  selector: 'my-div',
  templateUrl: './my-div.component.html',
  styleUrls: ['./my-div.component.css'],
})
export class MyDivComponent implements OnInit {
  constructor() {
  }
  ngAfterViewInit(): void {
    let dom: any = document.getElementById('myDom');
    dom.style.color = 'red';
  }
}

```



## 26.2.ViewChild操作DOM1.0

这个可以操作，但是貌似官方的比这个复杂：[官方操作](https://angular.cn/api/core/ViewChild)

TS：

```js
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'my-div',
  templateUrl: './my-div.component.html',
  styleUrls: ['./my-div.component.css'],
})
export class MyDivComponent implements OnInit {
  @ViewChild('myHeader') myHeader: any;
  @ViewChild('h3tag') h3tag: any;
  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    // DOM节点加载完成。
    // 这里可以访问各个View 了。
    // 包括ViewChild定义的，或者JS获取的。

    this.h3tag.nativeElement.style.color = 'red';
    // ↓这里可以调用子组件的方法
    this.myHeader.sayHello();
  }
}

```



HTML：

```html
<p>my-div works!</p>
<my-header #myHeader></my-header>
<h3 #h3tag>这个一个普通H3标签</h3>

```



# 27.侧边栏动画实战



# 28.路由传参



## 28.1.路由传参

TS：

```js
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // ↓问号传参
    this.route.queryParams.subscribe((params) => {
      this.name = params['name'];
    });
  }

  public name: string = '';
}

```



# 29.异步处理

## 29.1.回调函数

```js
getCallbackData(cb){
    setTimeout(() => {
        var username='张三';    
        cb(username);
    }, 1000);
}

// ↓使用
getCallbackData((data)=>{
    console.log(data);
});
```



## 29.2.promise

```js
getPromiseData(){
    return new Promise((resolve)=>{      
        setTimeout(() => {
            var username='张三--Promise';
            resolve(username);
        }, 3000); 
    })
}

// ↓使用
getPromiseData().then((data)=>{
    console.log(data);
})
```



## 29.3.RxJS

```js
import { Observable } from 'rxjs';

getRxjsData(){
    return new Observable<any>((observer)=>{
        setTimeout(() => {
            var username='张三--Rxjs';
            // observer.next()返回数据
            observer.next(username);     
            // observer.error('数据')   
        }, 3000); 
    })
}

// ↓使用
getRxjsData().subscribe((data)=>{
    console.log(data);
})
```



## 29.4.RxJS扩展

还是在以上代码基础。

### 29.4.1.撤回操作

```js
let d = getRxjsData().subscribe((data)=>{
    console.log(data);
})

setTimeout(()=>{
    d.unsubscribe();  /*取消订阅*/
},1000)
```

> 这样subscribe()中的回调函数就不会执行了。



### 29.4.2.多次执行

```js
// RxJS多次执行
getRxjsIntervalData(){
    let count = 0;
    return new Observable<any>((observer)=>{
        setInterval(() => {
            count++;
            var username = '张三--Rxjs-Interval' + count;
            observer.next(username);     
            // observer.error('数据')        
        }, 1000); 
    })
}

// ↓使用
getRxjsIntervalData().subscribe((data)=>{
    console.log(data);
})
```



promise测试：

```js
// promise 执行多次
getPromiseIntervalData(){
    return new Promise((resolve)=>{
        setInterval(() => {
            var username='张三--Promise  Interval';
            resolve(username);
        }, 1000); 
    })
}

// ↓使用
// 没有这个功能，只会执行一次
getPromiseIntervalData().then((data)=>{
    console.log(data);
})
```



## 29.5.RxJS工具函数

还是在以上代码基础。

pipe其实是管道，结合使用是有顺序的。



### 29.5.1.Map

数据进行处理。

```js
import { map } from "rxjs/operators";

// 返回平方
getRxjsIntervalNum().pipe(
    map((value)=>{
        return value*value;
    })
).subscribe((data)=>{
    console.log(data);
})
```





### 29.5.2.Filter

数据过滤。

```js
import { filter } from "rxjs/operators";

// 返回偶数
getRxjsIntervalNum().pipe(
    filter((value)=>{
        if(value%2==0){
            return true;
        }
    })
).subscribe((data)=>{
    console.log(data);
})
```



### 29.5.3.结合使用

```js
import { map, filter } from "rxjs/operators";

getRxjsIntervalNum().pipe(
    filter((value) => {
        if (value % 2 == 0) {
            return true;
        }
    }),
    map((value) => {
        return value * value;
    })
).subscribe((data) => {
    console.log(data);
});
```



# 30.请求数据

## 30.1.模块添加依赖

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}

```



## 30.2.发送get请求

```js
import { Component, OnInit } from '@angular/core';
// 当作一个服务使用
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-a06-http',
    templateUrl: './a06-http.component.html',
    styleUrls: ['./a06-http.component.css']
})
export class A06HttpComponent implements OnInit {

    constructor(public http: HttpClient) {
        this.http.get('http://a.itying.com/api/productlist').subscribe(response => {
            console.log(response);
        });
    }

    ngOnInit(): void {
    }

}

```



## 30.3.发送post请求

```js
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-a06-http',
    templateUrl: './a06-http.component.html',
    styleUrls: ['./a06-http.component.css']
})
export class A06HttpComponent implements OnInit {

    constructor(public http: HttpClient) {
    }

    ngOnInit(): void {
    }

    public sendPost(): void {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        const path = 'http://localhost:8080/test';
        const body = {
            username: '张三',
            age: 20
        };
        this.http.post(path, body, httpOptions).subscribe((response: any) => {
            console.log(response);
        });
    }

}

```



## 30.4.通过Jsonp请求数据

跨域的额外解决方案，当然后端要支持Jsonp请求。

主模块（添加依赖）：

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, HttpClientJsonpModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}

```



使用：

```js
public getJsonpData(): void {
    // callbackParam取决于后端定义的回调参数String，jsonp会
    this.http.jsonp('http://a.itying.com/api/productlist', 'callback').subscribe((response: any) => {
        console.log(response);
        this.dataList = response.result;
    });
}
```



## 30.5.axios依赖

安装依赖：

```
cnpm i axios --save
```

> Angular中不支持Request的操作，要用`import`的方式使用。



使用：

```js
public getDataByAxios(): void {
    axios.get('/user?id=1234')
        .then((data) => {
            console.log('成功执行', data);
        })
            .catch((data) => {
            console.log('失败执行', data);
        })
            .then((data) => {
            console.log('最后执行', data);
        });
}
```



# 31.路由使用

路由是需要添加依赖的，一般在创建项目的时候就已经添加了。



## 31.1.主模块注册

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}

```



## 31.2.路由配置

也在根目录下，配置`app-routing.module.ts`文件。

```js
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A01DomCssComponent } from './components/a01-dom-css/a01-dom-css.component';
import { Z01NotPageComponent } from './components/z01-not-page/z01-not-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/a01', pathMatch: 'full' },
  { path: 'a01', component: A01DomCssComponent },
  { path: '**', component: Z01NotPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

```



## 31.3.路由激活样式

在路由链接上定义`routerLinkActive`属性即可。`routerLinkActive`定义的就是激活后的样式，所以需要在对应编写对应的样式类，至于激活处理Angular自己会处理。

```js
<li class="nav-item" *ngFor="let item of routerList;let i = index;">
    <a [routerLink]="item.path" routerLinkActive="active">{{i+1}}.{{item.name}}</a>
</li>
```



# 32.路由传参

## 32.1.链接问号传参

### 32.1.1.传递参数

```js
<div class="page">
    <div style="border-bottom: 1px solid #ccc;padding-bottom: 16px;margin-bottom: 16px;">
        <span *ngFor="let i of [1,2,3,4];" style="margin-right: 8px;">
            <a [routerLink]="'/a07/content'" [queryParams]="{id:i}" routerLinkActive="active">{{i}}.跳转到子路由</a>
        </span>
    </div>
    <router-outlet></router-outlet>
</div>

```

> - 参数必须写在`queryParams`中，写在`routerLink`中问号和等于号会被转义。
> - `queryParams`接收的是一个对象。



### 32.1.2.接收参数

```js
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'a07-get-get-route-data',
    templateUrl: './get-get-route-data.component.html',
    styleUrls: ['./get-get-route-data.component.css']
})
export class A07GetGetRouteDataComponent implements OnInit {

    public queryParams: any = null;

    constructor(public route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe((data) => {
            this.queryParams = data;
        });
    }

}

```

> - 要注入`ActivatedRoute`依赖。
> - `this.route`中的一些子对象是AxJS的扩展类，所以需要`subscribe()`才能获取到其中的值。
> - `queryParams`就是路径参数。



## 32.2.链接动态路由传参

### 32.2.1.定义参数

路由定义：

```js
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A01DomCssComponent } from './components/a01-dom-css/a01-dom-css.component';
import { A08RouteComponent } from './components/a08-route/a08-route.component';
import { A08UrlGetRouteDataComponent } from './components/a08-route/url-get-route-data/url-get-route-data.component';

const routes: Routes = [
    { path: '', redirectTo: '/a01', pathMatch: 'full' },
    { path: 'a01', component: A01DomCssComponent },
    {
        path: 'a08',
        component: A08RouteComponent,
        children: [
            {
                path: ':id/:age',
                component: A08UrlGetRouteDataComponent,
            }
        ],
    },
    { path: '**', component: Z01NotPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}

```

> 使用`:key`来定义。



### 32.2.2.传递参数

```html
<div class="page">
    <div style="border-bottom: 1px solid #ccc;padding-bottom: 16px;margin-bottom: 16px;">
        <span *ngFor="let i of [1,2,3,4];" style="margin-right: 8px;">
            <a [routerLink]="['/a08', i, i+1]" routerLinkActive="active">{{i}}.跳转到子路由</a>
        </span>
    </div>
    <router-outlet></router-outlet>
</div>

```

> 多个动态路由参数，按照顺序传参即可。



### 32.2.3.接收参数

```js
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'a08-url-get-route-data',
    templateUrl: './url-get-route-data.component.html',
    styleUrls: ['./url-get-route-data.component.css']
})
export class A08UrlGetRouteDataComponent implements OnInit {

    public params: any = null;

    constructor(public route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((data) => {
            this.params = data;
        });
    }

}

```

> 动态路由的参数获取是通过路由中定义的key值获取。



## 32.3.JS问号传参

不传参数就可以实现，普通路由调整。



### 32.3.1.传递参数

```js
import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'app-a09-route',
    templateUrl: './a09-route.component.html',
    styleUrls: ['./a09-route.component.css']
})
export class A09RouteComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit(): void {
    }

    public showChildRoute(): void {
        const navigationExtras: NavigationExtras = {
            // ↓问号传参
            queryParams: { id: 1 },
            // ↓#号传参
            fragment: 'anchor'
        };
        this.router.navigate(['/a09/content'], navigationExtras);
    }

}

```

> 注入`NavigationExtras`依赖。



### 32.3.2.接收参数

```js
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-js-get-get-route-data',
    templateUrl: './js-get-get-route-data.component.html',
    styleUrls: ['./js-get-get-route-data.component.css']
})
export class A09JsGetGetRouteDataComponent implements OnInit {

  public queryParams: any = null;

    constructor(public route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe((data) => {
            this.queryParams = data;
        });
    }

}

```



## 32.4.JS动态路由传参

### 32.4.1.定义参数

```js
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A01DomCssComponent } from './components/a01-dom-css/a01-dom-css.component';
import { A08RouteComponent } from './components/a08-route/a08-route.component';
import { A08UrlGetRouteDataComponent } from './components/a08-route/url-get-route-data/url-get-route-data.component';

const routes: Routes = [
    { path: '', redirectTo: '/a01', pathMatch: 'full' },
    { path: 'a01', component: A01DomCssComponent },
    {
        path: 'a10',
        component: A10RouteComponent,
        children: [
            {
                path: ':id/:age',
                component: A10JsUrlGetRouteDataComponent,
            }
        ],
    },
    { path: '**', component: Z01NotPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}

```



### 32.4.2.传递参数

```js
import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'app-a10-route',
    templateUrl: './a10-route.component.html',
    styleUrls: ['./a10-route.component.css']
})
export class A10RouteComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit(): void {
    }

    public showChildRoute(): void {
        const navigationExtras: NavigationExtras = {
            // ↓问号传参
            queryParams: { id: 1 },
            // ↓#号传参
            fragment: 'anchor'
        };
        this.router.navigate(['/a10/', 123, 456]);
    }

}

```



### 32.4.3.接收参数

```js
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-js-url-get-route-data',
    templateUrl: './js-url-get-route-data.component.html',
    styleUrls: ['./js-url-get-route-data.component.css']
})
export class A10JsUrlGetRouteDataComponent implements OnInit {

    public params: any = null;

    constructor(public route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((data) => {
            this.params = data;
        });
    }

}

```



# 33.自定义模块

## 33.1.创建模块

加入项目非常大，根模块中有成百上千个组件。那么应用被加载的时候加载根模块就会非常慢。所以我们要将组件注册在自定义模块中。当要的时候再加载自定义模块。

```
ng g module module/my-module

# 可以给模块添加路由依赖，这样后面可以实现懒加载
ng g module module/my-module --routing
```



## 33.2.创建模块组件

然后就可以在模块中创建组件了，这样创建的组件就不会在根模块中注册，会自动在我们的自定义模块中注册。

```
ng g component module/my-module/components/my01-div
```



## 33.3.创建模块根组件

根组件一般暴露出去，让路由动态加载该模块。即结合路由实现懒加载功能。

```
ng g component module/my-module
```



## 33.3.暴露组件

```js
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { My01DivComponent } from './components/my01-div/my01-div.component';
import { My02DivComponent } from './components/my02-div/my02-div.component';
import { My03DivComponent } from './components/my03-div/my03-div.component';

@NgModule({
  declarations: [My01DivComponent, My02DivComponent, My03DivComponent],
  imports: [CommonModule],
  exports: [My01DivComponent]
})
export class MyModuleModule {
}

```

> 这样添加该模块的模块才能使用`MyDiv01Component`标签，从而使用这个模块中的组件。
>
> 当然，这些组件在本模块中不暴露也是可以被使用。



## 33.4.模块懒加载

由于模块具有懒加载特性。所以我们可以把一个组件单独放成一个组件。然后在根模块中配置这个模块的懒加载。从而提高应用的性能。

```
ng g module module/customers-module --route path-customers --module app.module
```

> 上面这个指令的操作：
>
> - `module/customers-module`：模块的位置和名称。
> - `--route`：需要配置路由。
> - `path-customers`：导入到其他模块中后，该模块对应的路径。
> - `--module`：指定要导入的模块。
> - `app.module`：导入的模块的名称，这里指向主模块。
>
> 
>
> 这个指令总共会创建6个文件，修改一个文件。
>
> - 4个模块视图文件。
> - 1个路由配置文件：并将上面的模块视图导入到默认路径下。
> - 1个模块文件：模块文件中导入了上面的路由模块，注册了模块视图文件。
> - 修改了主模块中路由文件，在主模块的路由中使用`path-customers`定义的路径，然后采用懒加载的方式加载该模块视图。



# 34.组件传值

## 34.1.父给子传值

### 34.1.1.父组件传值

```html
<div class="box">
  <h3 style="text-align: center;">这是父组件</h3>
  <a02-child [title]="title" [parentRun]="run" [parent]="this"></a02-child>
</div>

```

> 通过属性传值



### 34.1.2.子组件接收

```js
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'a02-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class A02ChildComponent implements OnInit {

  @Input() title: string;
  @Input() parentRun: any;
  @Input() parent: any;

  constructor() {}

  ngOnInit(): void {}
}

```

> 通过`@Input()`接收。



## 34.2.父调用子数据

### 34.2.1.父组件调用

TS：

```js
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

```



HTML：

```html
<div class="box">
  <h3 style="text-align: center;margin-bottom: 8px;">这是父组件</h3>
  <div style="margin-bottom: 8px;">
    <button (click)="runChildRun()">获取子组件实体</button>
  </div>
  <a03-child #childDom></a03-child>
</div>

```

> - 通过`@ViewChild`获取子组件，相当于Vue的Ref。
>
> - `@ViewChild`获取组件时，是组件（不是DOM，有组件中的方法和属性）。
> - `@ViewChild`获取DOM元素时，时DOM元素（和组件不一样，这里可以操作DOM元素，改变样式等，注意在对应渲染完生命周期的函数中改变DOM元素）。



### 34.2.2.子组件的数据

```js
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

```



## 34.3.子组件提交事件

### 34.3.1.子组件提交事件

```js
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

```



### 34.3.2.父组件监听事件

```html
<div class="box">
  <h3 style="text-align: center;margin-bottom: 8px;">这是父组件</h3>
  <div style="text-align: center;margin-bottom: 8px;">{{parentData|json}}</div>
  <a04-child (emitAction)="onChildEmit($event)"></a04-child>
</div>

```

> 注意一定要用`$event`接收参数。

