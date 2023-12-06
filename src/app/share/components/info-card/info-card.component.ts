import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Property } from 'src/app/core/interfaces/property-description.interface';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule, ImageSliderComponent, FontAwesomeModule],
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnChanges {
  faArrowDown = faArrowDown;
  @Input() Property!: Property;
  difference!: number;
  diff = false;
  description!: string;

  ngOnChanges(): void {
    this.description =
      this.Property?.description.length > 200
        ? this.Property.description.slice(0, 300) + '...'
        : this.Property.description;
    this.difference = Math.abs(
      Math.round(
        ((Number(this.Property?.price) - Number(this.Property?.previousPrice)) /
          Number(this.Property?.price)) *
          100,
      ),
    );

    this.diff =
      Number(this.Property?.price) === Number(this.Property?.previousPrice) ||
      this.difference === 0;
  }
}
