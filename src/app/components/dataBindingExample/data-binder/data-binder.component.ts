import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binder.component.html',
  styleUrl: './data-binder.component.css',
})
export class DataBinderComponent {
  name = 'Ragna';
  imagePath = '../../../../favicon.ico';
  specialChar = '{ }';
  specialChar2 = '[( )]';
  myFavFood = 'Fruits';
  isDisabled = false;
  submitted = '';

  passValueToComponent(e: any) {
    console.log(e);
  }

  checkValues () {
    if (this.myFavFood === this.submitted) {
      this.isDisabled = true;

    } else if (this.submitted !== this.myFavFood) {
      this.isDisabled = false;
    }
  }

  reset() {
    this.isDisabled = false;
    this.submitted = '';
  }


}
