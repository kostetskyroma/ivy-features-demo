import { Type, ɵDirectiveDef, ɵDirectiveType } from '@angular/core';

import { Writable } from '../../models';

import { IDirectiveFeature } from './directive-feature.interface';

export function DirectiveFeatures<T>(directiveType: Type<T>, features: IDirectiveFeature[], factory: () => T) {
  const directiveDef: Writable<ɵDirectiveDef<T>> = (directiveType as ɵDirectiveType<T>).ɵdir as ɵDirectiveDef<T>;

  Object.assign(directiveDef, {
    features: [...(directiveDef.features || []), ...features]
  } as ɵDirectiveDef<T>);

  directiveDef.factory = directiveDef.factory ?? factory;

  for (const feature of directiveDef.features as IDirectiveFeature[]) {
    feature(directiveDef);
  }
}
