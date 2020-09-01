import { ɵDirectiveDef } from '@angular/core';

export interface IDirectiveFeature {
  <T>(directiveDef: ɵDirectiveDef<T>): void;
  ngInherit?: true;
}
