import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [ButtonsModule.forRoot(), CommonModule],
  declarations: [HeaderComponent, ButtonComponent],
  exports: [HeaderComponent, ButtonComponent],
})
export class UiModule {}
