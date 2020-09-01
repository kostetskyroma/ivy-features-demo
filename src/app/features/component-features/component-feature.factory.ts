import { Type, ɵComponentDef, ɵComponentType } from '@angular/core';

import { Writable } from '../../models';

import { IComponentFeature } from './component-feature.interface';

export function ComponentFeatures<T>(componentType: Type<T>, features: IComponentFeature[], factory: () => T) {
  const componentDef: Writable<ɵComponentDef<T>> = (componentType as ɵComponentType<T>).ɵcmp as ɵComponentDef<T>;

  Object.assign(componentDef, {
    features: [...(componentDef.features || []), ...features]
  } as ɵComponentDef<T>);

  componentDef.factory = componentDef.factory ?? factory;

  for (const feature of componentDef.features as IComponentFeature[]) {
    feature(componentDef);
  }
}
