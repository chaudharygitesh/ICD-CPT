import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeechtotextComponent } from './speechtotext/speechtotext.component';

const routes: Routes = [
  {path : '' , component:SpeechtotextComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
