import { Component, HostListener } from '@angular/core';
import { PanelMenuComponent } from '../shared/panel-menu/panel-menu.component';
import { RouterOutlet } from '@angular/router';
import { BarMenuComponent } from '../shared/bar-menu/bar-menu.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,PanelMenuComponent, BarMenuComponent, CommonModule, FooterComponent],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {
  isPanelMenuVisible:boolean = false;
  isScreenLarge: boolean = false;
  footerOpacity: number = 0;
  isFotterVisible: boolean = false;

  ngOnInit(): void {
    this.updateScreenSize();
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.updateScreenSize();
  }

  updateScreenSize(){
    if (typeof window !== 'undefined') {
      this.isScreenLarge = window.innerWidth >= 1024;
      if (this.isScreenLarge) {
        this.isPanelMenuVisible = false;
      }
    }
  }

  togglePanelMenu(){
    this.isPanelMenuVisible = !this.isPanelMenuVisible;
  }
}
