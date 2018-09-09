import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeService } from './home/homeService';
import { HomeModule } from './home/home.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutesModule } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutesModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
