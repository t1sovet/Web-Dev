import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album-service';
import { AsyncPipe } from '@angular/common';
import { Album } from '../../model/album.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css'],
})
export class AlbumDetail implements OnInit {

  router = inject(Router);
  route = inject(ActivatedRoute);

  album$!: Observable<Album>;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Route ID:', id);

    this.album$ = this.albumService.getAlbum(Number(id));
  }

  save() {

  }

  goToPhoto(id: number) {
    this.router.navigate(['/albums', id, 'photos']);
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}