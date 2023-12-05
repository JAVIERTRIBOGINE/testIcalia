import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
})
export class ContentComponent {
  public loading: Observable<boolean> = this.loaderService.getLoading();

  constructor(private loaderService: LoaderService) {}
}
