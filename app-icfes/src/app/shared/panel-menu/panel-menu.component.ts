import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';


import { RouterModule } from '@angular/router';

import { HasRolesDirective } from 'keycloak-angular';

import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-panel-menu',
  imports: [PanelMenuModule, BadgeModule, RippleModule, RouterModule, HasRolesDirective],
  templateUrl: './panel-menu.component.html',
  styles: ``
})
export class PanelMenuComponent {
  
  private readonly keycloak = inject(Keycloak);

  visible:boolean = true
    items:MenuItem[] = [
    {
      label:'USERS',
      icon: 'pi pi-user',

      items: [
        {label: 'User accounts', icon: 'pi pi-users'}
      ]
    },
    {
      label: 'DATA ICFES',
      icon: 'pi pi-file',
      items: [
          {label: 'Import data', icon: 'pi pi-file-import', route: 'upload-icfes'},
          {label: 'View data', icon: 'pi pi-receipt', route: 'list-students-score'},
      ]
    },
    {
      label: 'DASHBOARDS',
      icon: 'pi pi-chart-bar',
      items: [
        {label: 'ICFES 1', icon: 'pi pi-chart-line', route: 'dashboard/icfes-1'},
        {label: 'ICFES 2', icon: 'pi pi-chart-line'},
        {label: 'ICFES 3', icon: 'pi pi-chart-line'}
      ]
    }
  ]

  private areAllItemsExpanded(): boolean {
    return this.items.every((menuItem) => menuItem.expanded);
  }

  private toggleAllRecursive(items: MenuItem[], expanded: boolean): MenuItem[] {
    return items.map((menuItem) => {
        menuItem.expanded = expanded;
        if (menuItem.items) {
            menuItem.items = this.toggleAllRecursive(menuItem.items, expanded);
        }
        return menuItem;
    });
  }


  toggleAll() {
    const expanded = !this.areAllItemsExpanded();
    this.items = this.toggleAllRecursive(this.items, expanded);
  }

  logout(){
    this.keycloak.logout();
  }
}
