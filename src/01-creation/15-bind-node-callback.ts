// bindNodeCallback<T>(
//   callbackFunc: Function, 
//   resultSelector: Function | ShedulerLike, 
//   sheduler?: ShedulerLike
// ): (...args: any[]) => Observable<T>

import { addItem, run } from './../03-utils';
import { bindNodeCallback, asyncScheduler } from 'rxjs';

export function bindNodeCallbackDemo1() {
  function doSomething(data: string, callback: (err: Error, arg: Array<string>) => number) {
   const words = data.split(' ');

   callback(null, words);
  }

  const boundFunc = bindNodeCallback(doSomething);
  
  const source$ = boundFunc('Some Data');
  // run(source$);
  // addItem('Line after subscribe');
}

export function bindNodeCallbackDemo2() {
  function doSomething(data: string, callback: (err: Error, arg: Array<string>, l: number) => number) {
    const words = data.split(' ');
    
    callback(null, words, words.length);
  }
  
  const boundFunc = bindNodeCallback(doSomething);
  
  const source$ = boundFunc('Some Data');
  // run(source$);
  // addItem('Line after subscribe');
}

export function bindNodeCallbackDemo3() {
  function doSomething(data: string, callback: (err: Error, arg: Array<string>, l: number) => number) {
   const words = data.split(' ');

   const err = new Error("Error");
   callback(err, null, null);
  }
  
  const boundFunc = bindNodeCallback(doSomething, asyncScheduler);
  
  const source$ = boundFunc('Some Data');
  // run(source$);
  // addItem('Line after subscribe');
}


export function bindNodeCallbackDemo4() {
  function doSomething(data: string, callback: (err: Error, arg: Array<string>, l: number) => number) {
   const words = data.split(' ');

   callback(null, words, words.length);
  }
  
  const boundFunc = bindNodeCallback(doSomething, (value: any) => value[0]);
  
  const source$ = boundFunc('Some Data');
  // run(source$);
}

