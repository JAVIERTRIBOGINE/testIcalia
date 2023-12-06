import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { PropertyService } from '../property.service';
import { ActivatedRoute } from '@angular/router';
import { propertydetailsUrlParameters } from 'src/app/core/interfaces/url-parameters.interface';
import { Location } from '@angular/common';
import { faLocationDot, faBath, faBed, faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss'],
})
export class PropertyDetailComponent {
  property$!: Observable<any>;
  faLocationDot = faLocationDot;
  faBath = faBath;
  faBed = faBed;
  faHouse = faHouse;
  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute,
    private location: Location,
  ) {
    this.property$ = this.route.params.pipe(
      switchMap((params) => {
        const parameters: propertydetailsUrlParameters = {
          province: params['province'],
          city: params['city'],
          reference: params['reference'],
        };
        return this.setProperty(parameters);
      }),
    );
  }

  private setProperty(
    parameters: propertydetailsUrlParameters,
  ): Observable<any> {
    return this.propertyService.getProperty(parameters);
  }

  back() {
    this.location.back();
  }
}
