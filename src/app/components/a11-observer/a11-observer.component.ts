import { AfterViewInit, Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
    selector: 'app-a11-observer',
    templateUrl: './a11-observer.component.html',
    styleUrls: ['./a11-observer.component.css']
})
export class A11ObserverComponent implements OnInit, AfterViewInit {

    constructor() { }

    ngOnInit(): void {
    }

    public onButton01Click(): void {
        const sendCall = new Observable((observer) => {
            let watchId: number;

            // 简单geolocation API(地理位置API)检查提供要发布的值
            if ('geolocation' in navigator) {
                watchId = navigator.geolocation.watchPosition((position: Position) => {
                    observer.next(position);
                }, (error: PositionError) => {
                    observer.error(error);
                });
            } else {
                observer.error('Geolocation服务未被允许!');
            }

            // 当消费者取消订阅时，清除数据以备下次订阅。
            return {
                unsubscribe() {
                    console.log('异步请求已清楚');
                    navigator.geolocation.clearWatch(watchId);
                }
            };
        }).subscribe({
            next(position) {
                console.log('请求完成');
                console.log('Current Position: ', position);
            },
            error(msg) {
                console.log('异步请求出错: ', msg);
            }
        });

        setTimeout(() => {
            sendCall.unsubscribe();
        }, 2000);
    }

    public onButton02Click(): void {
        const myObserver = {
            next: x => console.log('异步请求成功: ' + JSON.stringify(x)),
            error: err => console.error('异步请求出错: ' + err),
            complete: () => console.log('异步请求最终执行。'),
        };
        const myObservableOf = of(1, 2, 3);
        myObservableOf.subscribe(myObserver);
        const myObservableFrom = from<any>([{ name: 'name01', age: 18 }, { name: 'name02', age: 19 }, { name: 'name03', age: 20 }]);
        myObservableFrom.subscribe(myObserver);
    }

    public onButton03Click(): void {
        const sequence = new Observable((observer) => {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            observer.complete();
            return { unsubscribe() {} };
        });
        sequence.subscribe({
            next(num) { console.log(num); },
            complete() { console.log('异步请求最终执行!'); }
        });
    }

    public fromEvent(target, eventName): any {
        return new Observable((observer) => {
            const handler = (e) => observer.next(e);
            target.addEventListener(eventName, handler);

            return () => {
                target.removeEventListener(eventName, handler);
            };
        });
    }

    // ↓DOM元素渲染完后绑定事件
    ngAfterViewInit() {
        const nameInput = document.getElementById('nameInput') as HTMLInputElement;
        this.fromEvent(nameInput, 'keydown')
            .subscribe((e: KeyboardEvent) => {
                // console.log(e, e.code, e.key, e.keyCode);
                if (e.code === 'Process') {
                    // 表示输入并没有完成，比如在输出中文配音，
                    // 这个时候回车会触发两次回车：第一次是将Process状态改变为输入状态。
                    // 第二次回车就是正真的回车，当然，如果是过程状态，一般就直接返回，不处理事件。
                    return;
                }
                if (e.key === 'Enter') {
                    // 回车时，将输入置空。
                    console.log(nameInput.value);
                    nameInput.value = '';
                }
            });
    }

    public onButton04Click(): void {
        const sequence = new Observable((observer) => {
            const seq = [1, 2, 3, 4, 5, 6];
            let timeoutId;
            const doSequence = (arr, idx) => {
                timeoutId = setTimeout(() => {
                    observer.next(arr[idx]);
                    if (idx === arr.length - 1) {
                        observer.complete();
                    } else {
                        doSequence(arr, ++idx);
                    }
                }, 1000);
            };
            doSequence(seq, 0);
            return {
                unsubscribe() {
                    clearTimeout(timeoutId);
                }
            };
        });
        const sendCall = sequence.subscribe({
            next(num) { console.log(num); },
            complete() { console.log('异步请求最终执行!'); }
        });
        setTimeout(() => {
            sendCall.unsubscribe();
        }, 5000);
    }

    public onButton05Click(): void {
        // ↓生成观察者对象的回调函数
        function multicastSequenceSubscriber() {
            const seq = [1, 2, 3];
            const observers = [];
            let timeoutId;
            return (observer) => {
                observers.push(observer);
                if (observers.length === 1) {
                    timeoutId = doSequence({
                        next(val) {
                            observers.forEach(obs => obs.next(val));
                        },
                        complete() {
                            observers.slice(0).forEach(obs => obs.complete());
                        }
                    }, seq, 0);
                }
                return {
                    unsubscribe() {
                        observers.splice(observers.indexOf(observer), 1);
                        if (observers.length === 0) {
                            clearTimeout(timeoutId);
                        }
                    }
                };
            };
        }

        function doSequence(observer, arr, idx) {
            return setTimeout(() => {
                observer.next(arr[idx]);
                if (idx === arr.length - 1) {
                    observer.complete();
                } else {
                    doSequence(observer, arr, ++idx);
                }
            }, 3000);
        }

        const multicastSequence = new Observable(multicastSequenceSubscriber());
        multicastSequence.subscribe({
            next(num) { console.log('1st subscribe: ' + num, new Date().getSeconds()); },
            complete() { console.log('1st sequence finished.'); }
        });
        setTimeout(() => {
            multicastSequence.subscribe({
                next(num) { console.log('2nd subscribe: ' + num, new Date().getSeconds()); },
                complete() { console.log('2nd sequence finished.'); }
            });
        }, 4500);
    }
}
