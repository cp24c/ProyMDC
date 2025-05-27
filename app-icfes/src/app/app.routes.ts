import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

import { canActivateAuthRole } from './guards/auth.guard';

export const routes: Routes = [
    {path:'', redirectTo:'data-icfes', pathMatch: 'full'},
    {
        path:'data-icfes',
        component: LayoutComponent,
        children: [
            {   
                path: 'dashboard/icfes-1',
                canActivate: [canActivateAuthRole],
                data: {role: 'api-read'}, 
                loadComponent: () => import('./dashboards/icfes-1/icfes-1.component').then(m => m.Icfes1Component)
            },
            {
                canActivate: [canActivateAuthRole],
                data: {role: 'api-admin'},
                path: 'upload-icfes',
                loadComponent: () => import('./admin/upload-icfes/upload-icfes.component').then(m => m.UploadIcfesComponent)
            }
        ]
    },
    { 
        path: 'forbidden',
        loadComponent: () => import('./forbidden/forbidden.component').then(m => m.ForbiddenComponent)
    },
    { 
        path: '**',
        redirectTo: ''
    }
];
