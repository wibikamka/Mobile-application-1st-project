import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile-id',
  templateUrl: './profile-id.page.html',
  styleUrls: ['./profile-id.page.scss'],
})
export class ProfileIdPage implements OnInit {
  profile: any = null;
  posts: any[] = [];
  loading = true;
  errorMessage = '';

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.loadProfile(userId);
  }

  loadProfile(userId: string | null) {
    if (!userId) return;

    this.apiService.get(`profile/${userId}`).subscribe(
      (response: any) => {
        this.profile = response.data;
        this.posts = response.data.post || [];
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching profile', error);
        this.errorMessage = 'Failed to load profile. Please try again.';
        this.loading = false;
      }
    );
  }
}
