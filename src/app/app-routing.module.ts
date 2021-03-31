import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolaluzComponent } from './holaluz/holaluz.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'landing-hola-luz', component: HolaluzComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
