import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { DetailUrlParamters } from 'src/app/core/interfaces/detail-url-paramters.interface';
import { InfoCardComponent } from '../info-card/info-card.component';
import {
  HttpProperty,
  Property,
} from 'src/app/core/interfaces/property-description.interface';
import { PropertyMapper } from 'src/app/core/mappers/property.mapper';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule, ImageSliderComponent, InfoCardComponent],
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
})
export class PropertyCardComponent implements OnChanges {
  descriptionPropertyData!: Property;
  @Input() property!: HttpProperty;

  @Input() imagesLength!: any;
  @Output() emitDetailPropertyUrl: EventEmitter<DetailUrlParamters> =
    new EventEmitter<DetailUrlParamters>();

  public navigateToDetailProperty() {
    const urlDetailParameters: DetailUrlParamters = {
      province: this.property.provinciaUrl,
      city: this.property.ciudadUrl,
      reference: this.property.id,
    };
    this.emitDetailPropertyUrl.emit(urlDetailParameters);
  }

  ngOnChanges(): void {
    this.descriptionPropertyData = new PropertyMapper(
       this.property?.Description,
       this.property?.Precio,
       this.property?.PrecioAnterior,
       this.property?.SuperficieTotal,
       this.property?.Bedrooms,
       this.property?.Bathrooms,
       this.property?.imagenes)
  }
}
