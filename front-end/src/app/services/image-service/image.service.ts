import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }

  public async convertFiles(
    files: FileList,
    maxImages: number = 5
  ): Promise<string[]> {

    const results: string[] = [];

    for (let i = 0; i < files.length && results.length < maxImages; i++) {
      const file = files[i];
      if (!file.type.startsWith('image/')) continue;

      const base64 = await this.convertFileToBase64(file);
      results.push(base64);
    }

    return results;
  }

  public saveImages(key: string, images: string[]): void {
    localStorage.setItem(key, JSON.stringify(images));
  }

  public loadImages(key: string): string[] {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

  public removeImage(key: string, index: number): string[] {
    const images = this.loadImages(key);
    images.splice(index, 1);
    this.saveImages(key, images);
    return images;
  }

  public clearImages(key: string): void {
    localStorage.removeItem(key);
  }
}
