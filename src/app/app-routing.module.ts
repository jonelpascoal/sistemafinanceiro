import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentWrapperComponent } from './componentes/content-wrapper/content-wrapper.component';
import { EmolumentoComponent } from './componentes/emolumento/emolumento.component';
import { EstudanteComponent } from './componentes/estudante/estudante.component';
import { RelatorioComponent } from './componentes/relatorio/relatorio.component';

const routes: Routes = [
  {
    path:'inicio', component : ContentWrapperComponent
  },
  {
    path: 'estudante', component : EstudanteComponent
  },
  {
    path: 'emolumento', component : EmolumentoComponent
  },
  {
    path: 'relatorio', component : RelatorioComponent
  },
  {
    path :'', redirectTo:'inicio', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
