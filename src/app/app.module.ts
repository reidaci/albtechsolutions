
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {AngularFireModule, FirebaseApp} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import {FirebaseTSFirestore} from 'firebasets/firebaseTSFirestore/firebaseTSFirestore'
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
        },
        deps: [HttpClient],
      },
    }),
  ],
  providers: [TranslateModule, HttpClient, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

    FirebaseTSApp.init(environment.firebase)
  }
 }
