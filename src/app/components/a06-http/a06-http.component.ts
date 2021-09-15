import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';

@Component({
    selector: 'app-a06-http',
    templateUrl: './a06-http.component.html',
    styleUrls: ['./a06-http.component.css']
})
export class A06HttpComponent implements OnInit {

    public dataList: any[] = [];

    constructor(public http: HttpClient) {
    }

    ngOnInit(): void {
    }

    public getDataList(): void {
        this.http.get('http://a.itying.com/api/productlist').subscribe((response: any) => {
            console.log(response);
            this.dataList = response.result;
        });
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

    public getJsonpData(): void {
        // callbackParam取决于后端定义的回调参数String，jsonp会
        this.http.jsonp('http://a.itying.com/api/productlist', 'callback').subscribe((response: any) => {
            console.log(response);
            this.dataList = response.result;
        });
    }

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

}
