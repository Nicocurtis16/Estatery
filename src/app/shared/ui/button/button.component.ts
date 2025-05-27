import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() state: 'active' | 'hover' | 'disable' = 'active';
  @Input() style: 'fill' | 'outlined' | 'text' | 'small-text' = 'fill';
  @Input() color: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() prefixIcon?: string;
  @Input() suffixIcon?: string;
  @Input() text: string = 'Button';
  @Output() onClick = new EventEmitter<Event>();
}
