import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

import { canActivateAuthRole } from './guards/auth.guard';

export const routes: Routes = [
    {path:'', redirectTo:'data-icfes/list-students-score', pathMatch: 'full'},
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
                path: 'upload-icfes',
                canActivate: [canActivateAuthRole],
                data: {role: 'api-admin'},
                loadComponent: () => import('./admin/upload-icfes/upload-icfes.component').then(m => m.UploadIcfesComponent)
            },
            {
                path: 'list-students-score',
                canActivate: [canActivateAuthRole],
                data: {role: 'api-read'},
                loadComponent: () => import('./dashboards/list-students-score/list-students-score.component').then(m => m.ListStudentsScoreComponent)
            },
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
