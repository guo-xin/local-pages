## angular 组件通讯

1. 父组件

```
// 页面级别引入
import { TimeSelector } from '@shared/components/time-selector';
@ViewChild('timeSelector') timeSelector: TimeSelector;

// 全局级别引入，用any
@ViewChild('timeSelector') timeSelector: any;

// 调用子组件方法
this.timeSelector.resetDate()

// 父组件方法
onStartTime(date: Date) {
  if (!this.q.activityTime) {
    this.q.activityTime = [];
  }
  this.q.activityTime[0] = date;
}
```

dom

```
<time-selector #timeSelector labelText="起止时间" (emitStartTime)="onStartTime($event)" (emitEndTime)="onEndTime($event)"></time-selector>
```

2. 子组件

```
import { EventEmitter } from '@angular/core';
@Output() emitStartTime = new EventEmitter()
// 调用父组件方法
this.emitStartTime.emit(date);
```
