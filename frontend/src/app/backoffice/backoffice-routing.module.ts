import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { ReportingComponent } from './reporting/reporting.component';
import { NgModule } from '@angular/core';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { QueryComponent } from './query/query.component';
import { MigrateComponent } from './migrate/migrate.component';
import { PatientComponent } from './patient/patient.component';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SettingComponent } from './setting/setting.component';
import { CampaignComponent } from './campaign/campaign.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    {
        path: '',
        component: BackofficeComponent,
        children: [
            {
                path: 'tablero',
                component: DashboardComponent,
                data: { title: 'Tablero' }
            },
            {
                path: 'administracion',
                component: ManagementComponent,
                data: { title: 'Administración' }
            },
            {
                path: 'consulta',
                component: QueryComponent,
                data: { title: 'Consulta' }
            },
            {
                path: 'migracion',
                component: MigrateComponent,
                data: { title: 'Migración' }
            },
            {
                path: 'paciente',
                component: PatientComponent,
                data: { title: 'Paciente' }
            },
            {
                path: 'inventario',
                component: InventoryComponent,
                data: { title: 'Inventario' }
            },
            {
                path: 'historia-clinica',
                component: MedicalHistoryComponent,
                data: { title: 'Historia Clínica' }
            },
            {
                path: 'reporteria',
                component: ReportingComponent,
                data: { title: 'Reporteria' }
            },
            {
                path: 'configuracion',
                component: SettingComponent,
                data: { title: 'Configuración' }
            },
            {
                path: 'administracion-de-campana',
                component: CampaignComponent,
                data: { title: 'Administración de Campaña' }
            },
            {
                path: 'administracion-de-menus',
                component: MenuComponent,
                data: { title: 'Administración de Menus' }
            },
            {
                path: 'cred',
                loadChildren: () => import('./cred/cred.module').then(m => m.CredModule),
                data: { title: 'Módulo de CRED' }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BackofficeRoutingModule {}