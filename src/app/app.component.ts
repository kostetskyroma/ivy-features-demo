import {Component, OnDestroy} from '@angular/core';
import {DestroyableFeature, Features} from './features';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Features([DestroyableFeature()])
export class AppComponent implements OnDestroy{
  readonly destroyed$: Observable<unknown>;
  title = 'ivy-features-demo';

  ngOnDestroy(): void {
    console.log('destroy');
  }
}
