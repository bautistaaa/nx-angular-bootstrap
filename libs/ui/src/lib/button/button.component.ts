import { Component, Input } from '@angular/core';

@Component({
  selector: 'lcmp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | undefined;
}
