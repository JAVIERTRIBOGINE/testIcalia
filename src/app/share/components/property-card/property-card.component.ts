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
import { PropertyDescription } from 'src/app/core/interfaces/property-description.interface';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule, ImageSliderComponent, InfoCardComponent],
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
})
export class PropertyCardComponent implements OnChanges {
  descriptionPropertyData!: PropertyDescription;
  ngOnChanges(): void {
    this.descriptionPropertyData = {
      description: this.property?.Description,
      price: this.property?.Precio,
      previousPrice: this.property?.PrecioAnterior,
      surface: this.property?.SuperficieTotal,
      bedrooms: this.property?.Bedrooms,
      bathrooms: this.property?.Bathrooms,
    };
  }
  @Input() property!: any;

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
}
