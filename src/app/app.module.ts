import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './componentes/app.component';
import { MainHeaderComponent } from './componentes/main-header/main-header.component';
import { MainSidebarComponent } from './componentes/main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './componentes/content-wrapper/content-wrapper.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SolicitacaoComponent } from './componentes/solicitacao/solicitacao.component';
import { EmolumentoComponent } from './componentes/emolumento/emolumento.component';
import { EstudanteComponent } from './componentes/estudante/estudante.component';
import { RelatorioComponent } from './componentes/relatorio/relatorio.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    FooterComponent,
    SolicitacaoComponent,
    EmolumentoComponent,
    EstudanteComponent,
    RelatorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
