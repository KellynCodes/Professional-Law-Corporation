import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AttorneysComponent } from './pages/attorneys/attorneys.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PracticeAreaComponent } from './pages/practice-area/practice-area.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { AttorneyComponent } from './pages/attorney/attorney.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Us',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact Us',
  },
  {
    path: 'our-attorneys',
    component: AttorneysComponent,
    title: 'Our Attorneys',
  },
  {
    path: 'attorney/:id',
    component: AttorneyComponent,
    title: 'Attorney',
  },
  {
    path: 'practice-area',
    component: PracticeAreaComponent,
    title: 'Practice Areas',
  },

  {
    path: 'why-us',
    component: WhyUsComponent,
    title: 'Why Choose Us',
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    title: 'Page Not Found',
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];
