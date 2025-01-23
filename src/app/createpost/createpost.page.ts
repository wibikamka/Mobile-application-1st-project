import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.page.html',
  styleUrls: ['./createpost.page.scss'],
})
export class CreatepostPage implements OnInit {
  // @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef | null =
    null;

  caption: string = '';
  imageFile: File | null = null;
  imagePreview: string | null = null;
  productIds: (number | null)[] = [null];
  isDraggingOver: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {}

  async presentImageSourceActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image Source',
      buttons: [
        {
          text: 'Take Photo',
          icon: 'camera',
          handler: () => this.takePicture(CameraSource.Camera),
        },
        {
          text: 'Choose from Gallery',
          icon: 'image',
          handler: () => this.takePicture(CameraSource.Photos),
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });

    await actionSheet.present();
  }

  async takePicture(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Base64,
        source: source,
      });

      // Convert base64 to file
      const blob = this.base64ToBlob(
        image.base64String!,
        `image/${image.format}`
      );
      this.imageFile = new File(
        [blob],
        `post-image.${image.format}`, // Tambahkan ekstensi file
        { type: blob.type }
      );

      this.imagePreview = `data:image/${image.format};base64,${image.base64String}`;
    } catch (error) {
      console.error('Error taking picture', error);
    }
  }

  // Helper method to convert base64 to Blob
  private base64ToBlob(base64: string, contentType: string): Blob {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file;
      this.previewFile(file);
    }
  }

  previewFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imagePreview = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDraggingOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDraggingOver = false;
  }

  onDropFile(event: DragEvent) {
    event.preventDefault();
    this.isDraggingOver = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      this.imageFile = file;
      this.previewFile(file);
    }
  }

  removeImage() {
    this.imageFile = null;
    this.imagePreview = null;
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  addProductField() {
    this.productIds.push(null);
  }

  removeProductField(index: number) {
    this.productIds.splice(index, 1);
  }

  createPost() {
    const filterProductIds = this.productIds.filter((id) => id !== null);
    if (!this.caption || !this.imageFile) {
      // Basic validation
      alert('Please fill all required fields');
      return;
    }

    const formData = new FormData();
    formData.append('caption', this.caption);
    formData.append('image', this.imageFile);

    // Add non-null product IDs
    filterProductIds.forEach((productId, index) => {
      formData.append(`product_id[${index}]`, productId!.toString());
    });

    console.log(formData);

    this.apiService.post('post', formData).subscribe({
      next: (response) => {
        console.log(response);
        // Navigate to posts or show success message
        this.router.navigate(['/profile']);
      },
      error: (error) => {
        console.error('Post creation failed', error);
        alert('Failed to create post');
      },
    });
  }
}
