import { PhotosService } from './../../service/photos.service';
import { IPost } from './../../models/post';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed-layout',
  templateUrl: './feed-layout.component.html',
  styleUrls: ['./feed-layout.component.scss'],
})
export class FeedLayoutComponent implements OnInit {
  photos!: IPost[];

  displayedColumns: string[] = ['albumId', 'id', 'title', 'url'];

  dataSource: MatTableDataSource<IPost> = new MatTableDataSource<IPost>(
    this.photos
  );

  constructor(private photosService: PhotosService) {}

  ngOnInit(): void {
    this.photosService.users.subscribe((data) => {
      this.photos = data;
      this.dataSource = new MatTableDataSource<IPost>(this.photos);
    });

    this.photosService.loadAll();
  }
}
