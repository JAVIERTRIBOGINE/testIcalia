import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { PropertyDescription } from 'src/app/core/interfaces/property-description.interface';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule, ImageSliderComponent, FontAwesomeModule],
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnChanges {
  faArrowDown = faArrowDown;
  @Input() propertyDescription!: PropertyDescription;
  difference!: number;
  diff = false;
  description!: string;

  ngOnChanges(): void {
    this.description =
      this.propertyDescription?.description.length > 200
        ? this.propertyDescription.description.slice(0, 300) + '...'
        : this.propertyDescription.description;
    this.difference = Math.abs(
      Math.round(
        ((Number(this.propertyDescription?.price) -
          Number(this.propertyDescription?.previousPrice)) /
          Number(this.propertyDescription?.price)) *
          100,
      ),
    );

    this.diff =
      Number(this.propertyDescription?.price) ===
        Number(this.propertyDescription?.previousPrice) ||
      this.difference === 0;
  }
}
