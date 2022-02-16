import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './template/header/header.component';
import { LoginComponent } from './publico/login/login.component';
import { NovaContaComponent } from './publico/nova-conta/nova-conta.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MinhasIncricoesComponent } from './component/minhas-incricoes/minhas-incricoes.component';
import { MeuPerfilComponent } from './component/meu-perfil/meu-perfil.component';
import { EventoDetalheComponent } from './publico/evento-detalhe/evento-detalhe.component';
import { InscricaoComponent } from './component/inscricao/inscricao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    NovaContaComponent,
    MinhasIncricoesComponent,
    MeuPerfilComponent,
    EventoDetalheComponent,
    InscricaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
