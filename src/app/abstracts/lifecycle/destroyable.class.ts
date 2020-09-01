import { Subject } from 'rxjs';

import { Directive, OnDestroy } from '@angular/core';

import { IDestroyable } from './destroyable.interface';

const destroySubject = Symbol('destroyed');

@Directive({
  selector: '[cmpDestroyable]'
})
// tslint:disable-next-line:directive-class-suffix
export class Destroyable implements IDestroyable, OnDestroy {
  private readonly [destroySubject] = new Subject();
  readonly destroyed$ = this[destroySubject].asObservable();

  ngOnDestroy() {
    this[destroySubject].next();
    this[destroySubject].complete();
  }
}
