import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    component: ProductsListComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
];
