import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyReadComponent } from './property-read/property-read.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { PropertyService } from './property.service';
import { HttpClientModule } from '@angular/common/http';
import { ImageSliderComponent } from 'src/app/share/components/image-slider/image-slider.component';
import { PaginationLinksComponent } from 'src/app/share/components/pagination-links/pagination-links.component';
import { PropertyCardComponent } from 'src/app/share/components/property-card/property-card.component';
import { ImageModalComponent } from 'src/app/share/components/image-modal/image-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: PropertyReadComponent,
  },
  {
    path: ':province/:city/:reference',
    component: PropertyDetailComponent,
  },
];

@NgModule({
  declarations: [PropertyReadComponent, PropertyDetailComponent],
  imports: [
    ImageModalComponent,
    ImageSliderComponent,
    PaginationLinksComponent,
    PropertyCardComponent,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
  ],
  exports: [RouterModule],
  providers: [ApiService, PropertyService],
})
export class PropertyModule {}
