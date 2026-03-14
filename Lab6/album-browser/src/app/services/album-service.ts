import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Album } from '../model/album.model';
import { Observable } from 'rxjs';
import { Photo } from '../model/photo.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  url = 'https://jsonplaceholder.typicode.com/';

  http = inject(HttpClient);

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.url}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.url}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.url}/albums/${id}/photos`);

  }

  updateAlbum(album: Album): {
    albCopy: Observable<Album> = this.getAlbum(album.id);
    albCopy.title = album.title;
}

deleteAlbum(id: number): Observable < void> {
  return this.http.delete<void>(
    `${this.url}/albums/${id}`
  );
}
}
