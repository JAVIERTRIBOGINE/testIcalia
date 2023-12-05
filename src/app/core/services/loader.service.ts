import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  getLoading() {
    return this.loading.asObservable();
  }
}
