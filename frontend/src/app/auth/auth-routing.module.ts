import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { SelectProfileComponent } from "./select-profile/select-profile.component";
import { SelectHealthEstablishmentComponent } from "./select-health-establishment/select-health-establishment.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";

const routes: Routes = [
    {
        path: 'iniciar-sesion',
        component: LoginComponent
    },
    {
        path: 'seleccionar-perfil',
        component: SelectProfileComponent
    },
    {
        path: 'seleccionar-establecimiento',
        component: SelectHealthEstablishmentComponent
    },
    {
        path: 'cambiar-clave',
        component: ChangePasswordComponent
    },
    {
        path: '**',
        redirectTo: 'iniciar-sesion'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}