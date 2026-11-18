import { RouterModule, Routes } from "@angular/router";
import { AnthropometricMeasurementComponent } from "./anthropometric-measurement/anthropometric-measurement.component";
import { ImmunizationComponent } from "./immunization/immunization.component";
import { NgModule } from "@angular/core";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'medidas-antropometricas',
        pathMatch: 'full'
    },
    {
        path: 'medidas-antropometricas',
        component: AnthropometricMeasurementComponent,
        data: { title: 'Medidas Antropométricas' }
    },
    {
        path: 'inmunizaciones',
        component: ImmunizationComponent,
        data: { title: 'Inmunizaciones' }
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CredRoutingModule {}