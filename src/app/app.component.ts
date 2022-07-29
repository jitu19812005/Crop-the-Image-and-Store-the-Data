import { Component } from '@angular/core';
import { ImagesService } from './images.service';
import { Images } from './Images';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private ImagesService: ImagesService, private router: Router) {}
  name = 'Angular 6';
  public config = {
    ImageName: 'Crop the Image and Store the Datapoint',
    AspectRatios: ['4:3', '16:9'],
    ImageUrl: 'https://picsum.photos/200/300?random=2',
    ImageType: 'image/jpeg',
  };

  public close() {}
  images: Images[] = [];
  public getAddDataPoint(event) {
    let img = new Images();
    img.DataPoints = event.size;
    img.transactionDate = event.lastModifiedDate.toDateString();
    this.ImagesService.addImages(img as Images).subscribe((img) => {
      this.images.push(img);
    });
    console.log(event);
  }
}
