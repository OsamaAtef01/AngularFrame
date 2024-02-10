import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'', redirectTo:'about', pathMatch:'full' , title:'startFramework/about'},
  {path:'about', component:AboutComponent, title:'startFramework/about'},
  {path:'portfolio', component:PortfolioComponent, title:'startFramework/portfolio'},
  {path:'contact', component:ContactComponent, title:'startFramework/contact'},
  {path:'**', component:NotfoundComponent, title:'startFramework/notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
