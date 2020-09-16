import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { ListaComponent } from './lista/lista.component';



export const routes: Routes = [
  {path: '', component: ListaComponent},
  {path: 'editar', component: EdicaoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




