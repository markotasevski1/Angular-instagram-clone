import { PhotosService } from './../../service/photos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { IPost } from '../../models/post';
import { QuestionComponent } from 'src/app/shared/components/question/question.component';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent {
  post!: IPost;
  constructor(
    private activatedRoute: ActivatedRoute,
    private photosService: PhotosService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (id) {
      this.getPost(id);
    }
  }
  getPost(id: number): void {
    this.photosService.getPhotoById(id).subscribe({
      next: (post) => (this.post = post),
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(QuestionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result){
        this.deletePhoto();
      }
    });
    }

  deletePhoto() {
    this.photosService.deletePhoto(this.post.id).subscribe({
      next: (data) => {
        console.log('Successfully deleted item');
        this.router.navigate(['/feed']);
      },
      error: (err) => {
        console.log('Error deleting item');
      },
    });
  }

}
