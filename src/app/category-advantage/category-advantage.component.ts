import { Component } from '@angular/core';

@Component({
  selector: 'app-category-advantage',
  templateUrl: './category-advantage.component.html',
  styleUrls: ['./category-advantage.component.css']
})
export class CategoryAdvantageComponent {
  categoryCommonPath = '../../assets/';
  categoryFruit = 'categoryFruits.jpg';
  categoryVegetable='categoryVegetables.jpg';
  categoryDryFruits='categoryDryFruits.jpg';
  categoryGreens='categoryGreens.jpg';
}
