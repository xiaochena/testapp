/* eslint-disable */
/** 先阶段代码、基础Promise、不包括then的链式调用 */
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1');
  }, 2000);
});

p1.then(res => {
  console.log(res, 'res');
});

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function myPromise(executor) {
  this.state = PENDING; //状态
  this.value = undefined; //成功结果
  this.reason = undefined; //失败原因

  this.onFulfilled = []; //成功的回调
  this.onRejected = []; //失败的回调
  const resolve = value => {
    if (this.state === PENDING) {
      this.value = value;
      this.state = FULFILLED;
      this.onFulfilled.forEach(fn => fn(value));
    }
  };
  const reject = value => {
    if (this.state === PENDING) {
      this.reason = reason;
      this.state = FULFILLED;
      this.onRejected.forEach(fn => fn(reason));
    }
  };
  executor(resolve, reject);
}

myPromise.prototype.then = function(onFulfilled, onRejected) {
  if (this.state === FULFILLED) {
    typeof onFulfilled === 'function' && onFulfilled(this.value);
  }
  if (this.state === REJECTED) {
    typeof onRejected === 'function' && onRejected(this.reason);
  }
  if (this.state === PENDING) {
    typeof onFulfilled === 'function' && this.onFulfilled.push(onFulfilled);
    typeof onRejected === 'function' && this.onRejected.push(onRejected);
  }
};

const p2 = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2');
  }, 2000);
});

p2.then(res => {
  console.log(res, 'res');
});
