import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageDataProperty } from 'src/app/core/interfaces/images-data.interface';

@Component({
  selector: 'app-image-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent {
  @Input() images!: ImageDataProperty[];
  @ViewChild('overlay', { static: false }) overlay!: ElementRef<HTMLDivElement>;
  @ViewChild('modal', { static: false }) modal!: ElementRef<HTMLDivElement>;

  openModal() {
    this.modal.nativeElement.classList.add('active');
    this.overlay.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.modal.nativeElement.classList.remove('active');
    this.overlay.nativeElement.style.display = 'none';
  }
}
