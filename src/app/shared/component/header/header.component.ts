import { Component } from '@angular/core';
import { MenusComponent } from '../../ui/menus/menus.component';
import { ButtonComponent } from "../../ui/button/button.component";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [MenusComponent, ButtonComponent],
})
export class HeaderComponent {}
