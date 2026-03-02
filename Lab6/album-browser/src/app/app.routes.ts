import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Home } from './components/home/home';
import { AlbumDetail } from './components/album-detail/album-detail';
import { AlbumPhotos } from './components/album-photos/album-photos';
import { Albums } from './components/albums/albums';

export const routes: Routes = [
    {
        path: '', component: Home
    },
    {
        path: 'home', component: Home
    },
    {
        path: 'about', component: About
    },
    {
        path: 'albums', component: Albums
    },
    {
        path: 'albums/:id', component: AlbumDetail
    },
    {
        path: 'albums/:id/photos', component: AlbumPhotos
    },
    {
        path: '**', redirectTo: ''
    }
];
