import { PhotosService } from './../../service/photos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPost } from '../../models/post';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  // This component is using reactive forms for editing the post

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
    private activatedRoute: ActivatedRoute,
    private photosService: PhotosService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.imageForm = this.formBuilder.group({
      albumId: [
        this.image.albumId,
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
      title: [this.image.title, [Validators.required]],
      url: [this.image.url, [Validators.required]],
      thumbnailUrl: [this.image.thumbnailUrl, [Validators.required]],
    });

    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (id) {
      this.getPost(id);
    }
  }
  getPost(id: number): void {
    this.photosService.getPhotoById(id).subscribe({
      next: (post) => (this.image = post),
    });
  }

  save() {
    console.log(this.image);
    this.photosService.saveEditedPhoto(this.image).subscribe({
      next: (data) => {
        console.log('successful added');
        this.router.navigate(['/feed']);
      },
      error: (error) => {
        console.log('Error update or add.');
        this.router.navigate(['/feed']);
      },
    });
  }
}
