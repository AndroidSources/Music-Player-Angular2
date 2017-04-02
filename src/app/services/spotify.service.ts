import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx'

/**
 * Created by Gowtham Chandrasekar on 25-03-2017.
 */

@Injectable()
export class SpotifyService {
  private searchURL: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;

  constructor(private _http: Http) {
  }

  searchMusic(str: string, type = 'artist') {
    this.searchURL = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
    return this._http.get(this.searchURL)
      .map(res => res.json());
  }

  getArtist(id: string) {
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
    return this._http.get(this.artistUrl)
      .map(res => res.json());
  }

  getAlbums(artistid: string) {
    this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistid + '/albums';
    return this._http.get(this.albumsUrl)
      .map(res => res.json());
  }

  getAlbum(id: string) {
    this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
    return this._http.get(this.albumUrl)
      .map(res => res.json());
  }
}
