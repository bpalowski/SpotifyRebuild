import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent  } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilComponent } from './profil/profil.component';
import { SearchMusicComponent } from './search-music/search-music.component';


const appRoutes: Routes = [
  {
     path: '',
     component: MainPageComponent

   },
   {
    path: 'Login',
    component: LoginComponent
  },
  {
   path: 'SignUp',
   component: SignUpComponent
 },
 {
  path: '',
  component: FooterComponent
},
{
 path: 'Search',
 component: SearchMusicComponent
}
{
 path: 'Profil',
 component: ProfilComponent
}
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
