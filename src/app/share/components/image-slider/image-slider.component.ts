import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageDataProperty } from 'src/app/core/interfaces/property-description.interface';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent {
  @Input() propertyData!: ImageDataProperty[];
  @Input() imagesLength!: number;
  currentIndex = 0;

  slide(val: number, event: Event) {
    event.stopPropagation();
    this.currentIndex = Math.abs(this.currentIndex + val) % this.imagesLength;
  }
}
