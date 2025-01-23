import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploreService } from '../explore.service';

@Component({
  selector: 'app-detailexplor',
  templateUrl: './detailexplor.page.html',
  styleUrls: ['./detailexplor.page.scss'],
})
export class DetailexplorPage implements OnInit {
  postId: string | null = null; // Menyimpan ID dari URL
  post: any; // Menyimpan data post
  loading: boolean = true; // Status loading

  @ViewChild('relatedProductsSection') relatedProductsSection!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private exploreService: ExploreService
  ) {}

  ngOnInit() {
    // Ambil ID dari URL dan load detail post
    this.route.paramMap.subscribe((params) => {
      this.postId = params.get('id');
      if (this.postId) {
        this.loadPostDetails(this.postId);
      } else {
        console.error('Post ID not found');
      }
    });
  }

  loadPostDetails(postId: string) {
    this.exploreService.getPostById(postId).subscribe(
      (response) => {
        if (response?.data) {
          this.post = response.data; // Simpan data post
          this.loading = false;

          // Scroll ke Related Products jika tersedia
          if (this.post.products?.length > 0) {
            setTimeout(() => {
              this.scrollToRelatedProducts();
            }, 100);
          }
        } else {
          console.error('No data in response');
          this.loading = false;
        }
      },
      (error) => {
        console.error('Error loading post details:', error);
        this.loading = false;
      }
    );
  }

  scrollToRelatedProducts() {
    if (this.relatedProductsSection) {
      this.relatedProductsSection.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
