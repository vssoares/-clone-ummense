import { ContatoComponent } from './pages/contato/contato.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

// components
import { HomeComponent } from './pages/home/home.component';


const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);