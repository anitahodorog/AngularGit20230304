import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: "kapcsolat" , component: KapcsolatComponent},
  {path: "fooldal", component: FooldalComponent},
  {path: "", pathMatch: "full", redirectTo: "/fooldal"},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
