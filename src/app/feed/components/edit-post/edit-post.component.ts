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
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
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
    console.log(this.image)
    this.photosService.savePhoto(this.image).subscribe({
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

// save(){

//   this.imageService.svePhoto(this.image).subscribe({
//   next: (data)=> {
//       console.log("Sucsess Update, Od Add");
//       const dialogRef = this.dialog.open(SuccessfullySubmittedDataComponent);
//       dialogRef.afterClosed().subscribe(()=>{
//         if(data.id > 5000){
//           this.router.navigate(["/photos"]);
//         }else{
//           this.router.navigate(['/photos',data.id]);
//         }

//       });
//   },
//   error: (error)=> {
//     console.log("Error update or add.");
//     this.dialog.open(ErrorSubmitDataComponent,{data: {error:error.message}});
//     }
//   });
// }
