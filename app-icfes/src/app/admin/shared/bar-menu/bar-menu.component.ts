import { Component, Output } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bar-menu',
  imports: [ToolbarModule, AvatarModule, ButtonModule],
  templateUrl: './bar-menu.component.html',
  styles: ``
})
export class BarMenuComponent {
  @Output() togglePanelMenu = new EventEmitter<void>();

  onTogglePanelMenu(){
    this.togglePanelMenu.emit();
  }  
}
