import { Observable } from 'rxjs';

import { OnDestroy } from '@angular/core';

export interface IDestroyable extends Partial<OnDestroy> {
  readonly destroyed$: Observable<unknown>;
  ngOnDestroy?(): void;
}
