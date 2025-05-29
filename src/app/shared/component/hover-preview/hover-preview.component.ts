import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-hover-preview',
  templateUrl: './hover-preview.component.html',
})
export class HoverPreviewComponent {
  @Input() previewData: any;
}
