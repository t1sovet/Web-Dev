import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album-service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Photo } from '../../model/photo.model';

@Component({
  selector: 'app-album-photos',
  imports: [AsyncPipe],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);

  photos$!: Observable<Photo[]>;

  constructor(private albumService: AlbumService) { }

  albumId = Number(this.route.snapshot.paramMap.get('id'));

  ngOnInit(): void {
    console.log(this.albumId);
    this.photos$ = this.albumService.getAlbumPhotos(this.albumId);
  }

  goBack() {
    this.router.navigate(['/albums', this.albumId]);
  }
}
