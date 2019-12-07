import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { NewAccountComponent } from './components/new-account/new-account.component';


const routes: Routes = [
  {
    path: '', component: AccountsListComponent,
    data: { title: 'Accounts', breadcrumb: 'ACCOUNTS' }
  },
  {
    path: 'new', component: NewAccountComponent,
    data: { title: 'New Account', breadcrumb: 'New Account' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
