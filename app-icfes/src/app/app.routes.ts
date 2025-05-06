import { Routes } from '@angular/router';
import { LayoutAdminComponent } from './admin/layout-admin/layout-admin.component';

export const routes: Routes = [
    {path:'', redirectTo:'admin', pathMatch: 'full'},
    {
        path:'admin',
        component: LayoutAdminComponent,
        children: [
            {path: 'dashboard/icfes-1', loadComponent: () => import('./admin/dashboards/icfes-1/icfes-1.component').then(m => m.Icfes1Component)}
        ]
    }
];
