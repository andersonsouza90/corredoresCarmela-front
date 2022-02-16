import { InscricaoComponent } from './component/inscricao/inscricao.component';
import { EventoDetalheComponent } from './publico/evento-detalhe/evento-detalhe.component';
import { MeuPerfilComponent } from './component/meu-perfil/meu-perfil.component';
import { MinhasIncricoesComponent } from './component/minhas-incricoes/minhas-incricoes.component';
import { LoginComponent } from './publico/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'minhasInscricoes', component:MinhasIncricoesComponent},
  {path: 'meuPerfil', component:MeuPerfilComponent},
  {path: 'eventoDetalhe', component:EventoDetalheComponent},
  {path: 'inscricao', component:InscricaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
