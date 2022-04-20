import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importar componentes

import { PrimeroComponent } from "./primero/primero.component";
import { SegundoComponent } from "./segundo/segundo.component";
import { HomeComponent } from "./home/home.component";
import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'home', component : HomeComponent},
  {path : 'primero', component : PrimeroComponent},
  {path : 'segundo', component : SegundoComponent},
  {path : 'cursos', component : CursosComponent},
  {path : 'cursos/:nombre/:edad', component : CursosComponent},
  {path : 'externo', component : ExternoComponent},
  {path : 'formulario', component : FormularioComponent},
  {path : '**' , component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
