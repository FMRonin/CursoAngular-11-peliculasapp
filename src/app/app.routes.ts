import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';


const APP_ROUTERS: Routes = [
        { path: 'home', component: HomeComponent },
        { path: 'pelicula/:idx', component: PeliculaComponent },
        { path: 'buscar/:parametro', component: BuscarComponent },
        { path: 'buscar', component: BuscarComponent },
        { path: '**', pathMatch: 'full', redirectTo: 'home' },
        ];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTERS);

