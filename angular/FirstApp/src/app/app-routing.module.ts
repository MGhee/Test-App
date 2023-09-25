import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { SettingsComponent } from './settings/settings.component';
import { PipingComponent } from './piping/piping.component';
import { NewImageComponent } from './newimage/newimage.component';
import { ToDoComponent } from './to-do/to-do.component';
import { DiceComponent } from './dice/dice.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'todo',component:ToDoComponent},
  {path:'dice',component:DiceComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'piping',component:PipingComponent},
  {path:'newimage',component:NewImageComponent},
  {path:'profile',canActivate:[AuthGuard], children: [{path:'',component:ProfileComponent},{path:'settings',component:SettingsComponent}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
