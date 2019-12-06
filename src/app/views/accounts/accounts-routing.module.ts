import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';


const routes: Routes = [
  {path: '', component: AccountsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
