import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../models/post';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  photosUrl: string = 'https://jsonplaceholder.typicode.com/photos/';
  private _posts: BehaviorSubject<IPost[]>;

  private dataStore: {
    posts: IPost[];
  };
  constructor(private httpClient: HttpClient) {
    this.dataStore = { posts: [] };
    this._posts = new BehaviorSubject<IPost[]>([]);
  }
  get users(): Observable<IPost[]> {
    return this._posts.asObservable();
  }
  loadAll() {
    return this.httpClient.get<IPost[]>(this.photosUrl).subscribe(
      (data) => {
        this.dataStore.posts = data;
        this._posts.next(Object.assign({}, this.dataStore).posts);
      },
      (error) => {
        console.log('failed to fetch data');
      }
    );
  }
  getPhotoById(id: number): Observable<IPost> {
    return this.httpClient.get<IPost>(this.photosUrl + id.toString());
  }
  deletePhoto(id: number) {
    return this.httpClient.delete<IPost>(this.photosUrl + id.toString());
  }
  savePhoto(post: IPost) {
    return this.httpClient.post<IPost>(this.photosUrl, post);
  }
  saveEditedPhoto(post: IPost) {
    return this.httpClient.put<IPost>(
      this.photosUrl + post.id.toString(),
      post
    );
  }
}
