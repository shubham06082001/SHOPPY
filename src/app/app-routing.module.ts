import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
