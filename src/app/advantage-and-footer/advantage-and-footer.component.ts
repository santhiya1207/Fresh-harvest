import { Component } from '@angular/core';
import { IonThumbnail } from '@ionic/angular';

@Component({
  selector: 'app-advantage-and-footer',
  templateUrl: './advantage-and-footer.component.html',
  styleUrls: ['./advantage-and-footer.component.css']
})
export class AdvantageAndFooterComponent {
  categoryCommonPath = '../../assets/';
  categoryFruit = 'categoryFruits.jpg';
  categoryVegetable='categoryVegetables.jpg';
  categoryDryFruits='categoryDryFruits.jpg';
  categoryGreens='categoryGreens.jpg';
}
