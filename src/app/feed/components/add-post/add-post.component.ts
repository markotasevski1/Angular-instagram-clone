import { PhotosService } from './../../service/photos.service';
import { Component } from '@angular/core';
import { IPost } from '../../models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  
// This component is using template driven  forms and purpose of it is to create new object of type IPost for submitting the data from template

  constructor(private PhotosService: PhotosService, private router: Router) {}
  post: IPost = {
    albumId: 2,
    id: 1,
    title: 'title',
    url: 'url',
    thumbnailUrl: 'thumbnail url',
  };
  ngOnInit(): void {
    this.resetForm();
  }
  submitForm() {
    this.PhotosService.savePhoto(this.post).subscribe({
      next: (data) => {
        console.log('successful added');
        this.router.navigate(['/feed']);
      },
      error: (data) => console.log(data),
    });
  }
  resetForm() {
    this.post = {
      albumId: 0,
      id: 0,
      title: '',
      url: '',
      thumbnailUrl: '',
    };
  }
}
