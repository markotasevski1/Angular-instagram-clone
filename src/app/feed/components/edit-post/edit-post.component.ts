import { PhotosService } from './../../service/photos.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPost } from '../../models/post';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent {
  imageForm!: FormGroup;
  image: IPost = {
    albumId: 0,
    id: 1,
    title: '',
    url: '',
    thumbnailUrl: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private PhotosService: PhotosService,
    private fb: FormBuilder
  ) {}

  save(){
    
  }
}
