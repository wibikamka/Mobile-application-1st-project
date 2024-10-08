import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  judul: string = ""
  judul_fix: string = "Judul Default"
  subtitle: string = ""
  subtitle_fix: string = "Subtitle Default"
  deskripsi: string = ""
  deskripsi_fix: string = "Deskripsi Default"
  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  ubahjudul(){
    this.judul_fix=this.judul
    this.deskripsi_fix=this.deskripsi
    this.subtitle_fix=this.subtitle

  }
 
}
