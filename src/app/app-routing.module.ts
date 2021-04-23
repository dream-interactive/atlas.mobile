import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  { path: '', redirectTo: '/organization', pathMatch: 'full' },
  {
    path: 'organization',
    loadChildren: () => import('~/app/components/organization/organization.module').then((m) => m.OrganizationModule),
  },
  {
    path: 'dashboards',
    loadChildren: () => import('~/app/components/dashboards/dashboards.module').then((m) => m.DashboardsModule),
  },
  {
    path: 'task',
    loadChildren: () => import('~/app/components/task/task.module.ts').then((m) => m.TaskModule),
  },
  {
    path: 'project',
    loadChildren: () => import('~/app/components/project/project.module').then((m) => m.ProjectModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('~/app/components/settings/settings.module').then((m) => m.SettingsModule),
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
