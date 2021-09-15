import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    routerList: any[] = [
        { path: '/a01', name: 'DOM操作实现侧边栏' },
        { path: '/a02', name: '父组件给子组件传值' },
        { path: '/a03', name: '父组件调用子组件的值' },
        { path: '/a04', name: '子组件提交事件' },
        { path: '/a05', name: '生命周期函数' },
        { path: '/a06', name: '异步请求' },
        { path: '/a07', name: 'A链接路径问号传参' },
        { path: '/a08', name: 'A链接动态传参' },
        { path: '/a09', name: 'JS路径问号传参' },
        { path: '/a10', name: 'JS动态传参' },
        { path: '/a11', name: 'Observer观察者' },
        { path: '/a12', name: '表单' },
        { path: '/fidel-yiu', name: '不存在页面' },
    ];
}
