import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Link } from 'src/app/core/interfaces/link.interface';

@Component({
  selector: 'app-pagination-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination-links.component.html',
  styleUrls: ['./pagination-links.component.scss'],
})
export class PaginationLinksComponent {
  @Input() links!: Link[];
  @Input() imagesLength!: number;
  @Input() currentPage!: number;
  currentIndex = 0;
  @Output() emitPageUrl: EventEmitter<string> = new EventEmitter<string>();

  pageUrl(link: Link): void {
    const isValid: boolean = this.isValid(link);
    if (isValid) this.emitPageUrl.next(link.url);
  }

  public isValid(link: Link) {
    const firstPage = this.currentPage === 1;
    return link.label !== '...' && !firstPage;
  }
}
