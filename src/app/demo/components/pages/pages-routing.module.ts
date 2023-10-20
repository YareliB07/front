import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'usuarios', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
        { path: 'prestamos', data: { breadcrumb: 'Charts' }, loadChildren: () => import('./charts/chartsdemo.module').then(m => m.ChartsDemoModule) },
        { path: 'colecciones', data: { breadcrumb: 'Form Layout' }, loadChildren: () => import('./formlayout/formlayoutdemo.module').then(m => m.FormLayoutDemoModule) },
        { path: 'home', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
