import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailUrlParamters } from 'src/app/core/interfaces/detail-url-paramters.interface';
import { LoaderService } from 'src/app/core/services/loader.service';
import { PropertyDescription } from 'src/app/core/interfaces/property-description.interface';

@Component({
  selector: 'app-property-read',
  templateUrl: './property-read.component.html',
  styleUrls: ['./property-read.component.scss'],
})
export class PropertyReadComponent implements OnInit {
  currentIndex = 0;
  imagesLength!: number;
  currentPage!: number;
  readEndPoint = `${environment.baseUrl}/${environment.entities.properties.read.url}`;
  allProperties$: Observable<any> = this.setProperties();
  constructor(
    private loaderService: LoaderService,
    private propertyService: PropertyService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.allProperties$.subscribe({
      complete: () => {
        this.loaderService.loading.next(false);
      },
    });
  }

  private setProperties(): Observable<PropertyDescription[]> {
    return this.propertyService.getProperties(this.readEndPoint).pipe(
      tap((data: any) => {
        this.imagesLength = data['data'].length;
        this.currentPage = data.current_page;
      }),
    );
  }

  onEmitPageUrl(event: string): void {
    this.readEndPoint = event;
    this.allProperties$ = this.setProperties();
  }

  onEmitDetailPropertyUrl(event: DetailUrlParamters) {
    this.router.navigate(
      [`./${event.province}/${event.city}/${event.reference}`],
      { relativeTo: this.route },
    );
  }
}
