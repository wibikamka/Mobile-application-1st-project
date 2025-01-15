import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploreService } from '../explore.service';  // Sesuaikan dengan path yang benar

@Component({
  selector: 'app-detailexplor',
  templateUrl: './detailexplor.page.html',
  styleUrls: ['./detailexplor.page.scss'],
})
export class DetailexplorPage implements OnInit {
  postId?: string;  // Bisa undefined
  post: any; // Menyimpan data post berdasarkan ID

  constructor(
    private route: ActivatedRoute,
    private exploreService: ExploreService
  ) {}

  ngOnInit() {
    // Mendapatkan ID dari URL
    this.route.paramMap.subscribe((params) => {
      this.postId = params.get('id')!;
      this.loadPostDetails(this.postId);
    });
  }

  loadPostDetails(postId: string) {
    this.exploreService.getPostById(postId).subscribe(
      (data) => {
        this.post = data;  // Menyimpan data post yang didapat
      },
      (error) => {
        console.error('Error loading post details:', error);
      }
    );
  }
}
