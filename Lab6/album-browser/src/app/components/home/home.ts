import { Component, inject, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  beb = inject(AlbumService);
  ngOnInit(): void {
    console.log(this.beb.getAlbums());
  }
}
