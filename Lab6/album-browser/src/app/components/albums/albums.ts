import { Component, inject, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album-service';
import { Album } from '../../model/album.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-albums',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums implements OnInit {

  albarr$!: Observable<Album[]>;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albarr$ = this.albumService.getAlbums();
  }


}
