import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID,NgModule } from '@angular/core';

// Modulos
import { appRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';


import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


import { ReactiveFormsModule } from'@angular/forms';
import { FormsModule } from'@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';

import { RegistrarComponent } from './registrar/registrar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroComponent } from './registro/registro.component';
import { BlogComponent } from './blog/blog.component';
// import { FirebaseService} from './firebase/firebase.service'






@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    RegistrarComponent,
    NavbarComponent,
    RegistroComponent,
    BlogComponent,
   
  ],
  imports:[
    BrowserModule,
    appRoutingModule,
    PagesModule,
    AuthModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule,
    Swal
    // NgbModule,
   
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-cl' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
