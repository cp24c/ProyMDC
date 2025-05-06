import { Component, OnInit, HostListener } from '@angular/core';
import { PanelMenuComponent } from '../shared/panel-menu/panel-menu.component';
import { RouterOutlet } from '@angular/router';
import { BarMenuComponent } from '../shared/bar-menu/bar-menu.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-admin',
  imports: [RouterOutlet,PanelMenuComponent, BarMenuComponent, CommonModule, FooterComponent],
  templateUrl: './layout-admin.component.html',
  styles: ``
})
export class LayoutAdminComponent {
  isPanelMenuVisible:boolean = false;
  isScreenLarge: boolean = false;
  footerOpacity: number = 0;

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
