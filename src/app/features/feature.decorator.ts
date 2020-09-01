import { Type, ɵComponentType, ɵDirectiveType } from '@angular/core';

import { ComponentFeatures, IComponentFeature } from './component-features';
import { DirectiveFeatures, IDirectiveFeature } from './directive-features';

type IFeature = IDirectiveFeature | IComponentFeature;

function FeaturesDecorator(features: IFeature[]) {
  return <T>(componentType: Type<T>) => {
    // Promise is needed if you use jit compilation
    // When you use aot, you can remove this promise
    Promise.resolve().then(() => {
      const def = componentType as ɵDirectiveType<T> & ɵComponentType<T>;

      if (!def.ɵcmp && !def.ɵdir) {
        throw new Error('Ivy is not enabled.');
      }

      if (def.ɵcmp) {
        ComponentFeatures(def, features, def.ɵfac);
      }
      if (def.ɵdir) {
        DirectiveFeatures(def, features, def.ɵfac);
      }
    });
  };
}

export { FeaturesDecorator as Features };
