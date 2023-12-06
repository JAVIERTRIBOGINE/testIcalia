import { Injectable } from '@angular/core';
import { Observable, finalize, tap } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { Property } from 'src/app/core/interfaces/property-description.interface';
import { propertydetailsUrlParameters } from 'src/app/core/interfaces/url-parameters.interface';
import { LoaderService } from 'src/app/core/services/loader.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class PropertyService {
  constructor(
    private apiService: ApiService,
    private loaderService: LoaderService,
  ) {}

  getProperties(url: string) {
    this.loaderService.loading.next(true);
    return this.apiService
      .getEntityData(url)
      .pipe(finalize(() => this.loaderService.loading.next(false)));
  }

  getProperty(data: propertydetailsUrlParameters): Observable<Property[]> {
    this.loaderService.loading.next(true);
    const segment: string = environment.entities.properties.detail.url
      .replace(':city', data.city)
      .replace(':province', data.province)
      .replace(':reference', data.reference);
    return this.apiService
      .getEntityData<Property>(`${environment.baseUrl}/${segment}`)
      .pipe(tap(() => this.loaderService.loading.next(false)));
  }
}
