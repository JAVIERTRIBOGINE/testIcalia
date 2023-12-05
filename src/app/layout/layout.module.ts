import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from '../share/components/spinner/spinner.component';

const routes: Routes = [
  {
    path: 'properties',
    loadChildren: () =>
      import('../feature/property/property.module').then(
        (m) => m.PropertyModule,
      ),
  },
  {
    path: '',
    redirectTo: 'properties',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [HeaderComponent, ContentComponent, FooterComponent],
  imports: [SpinnerComponent, CommonModule, RouterModule.forRoot(routes)],
  exports: [HeaderComponent, ContentComponent, FooterComponent, RouterModule],
})
export class LayoutModule {}
