import { Component, Input } from '@angular/core';
import { Menus } from '../../type/menus';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-menus',
  imports: [CommonModule],
  templateUrl: './menus.component.html',
})
export class MenusComponent {
  @Input() menuType: Menus = 'navbar';
  @Input() menuData: string[] = [];

  getImagePath(item: string): string {
    const imgPath =
      this.menuType === 'subcategories' ? 'subcategories' : 'products';
    return `assets/images/${imgPath}/${item}.svg`;
  }
}
