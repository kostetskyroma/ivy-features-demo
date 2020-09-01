import { ɵComponentDef } from '@angular/core';

import { IDirectiveFeature } from '../directive-features';

export interface IComponentFeature extends IDirectiveFeature {
  <T>(componentDef: ɵComponentDef<T>): void;
  ngInherit?: true;
}
