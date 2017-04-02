import {Component} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../models/Artist';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
})
export class SearchComponent {

  public searchStr: string;
  private searchResults: Artist[];

  constructor(private _spotifyService: SpotifyService) {
  }

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        this.searchResults = res.artists.items;
      });
  }
}
