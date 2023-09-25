import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { PipingComponent } from './piping/piping.component';
import { ReversePipe } from './Custom-Pipe/reverse.pipe';
import { TruncatePipe } from './Custom-Pipe/truncate.pipe';
import { NewImageComponent } from './newimage/newimage.component';
import { ToDoComponent } from './to-do/to-do.component';
import { DiceComponent } from './dice/dice.component';
import { CalculatorComponent } from './calculator/calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    SettingsComponent,
    PipingComponent,
    ReversePipe,
    TruncatePipe,
    NewImageComponent,
    ToDoComponent,
    DiceComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
