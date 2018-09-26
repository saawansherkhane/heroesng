import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BranchesComponent } from './branches/branches.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { AccountsComponent } from './accounts/accounts.component';
import {AccountDetailComponent} from "./account-detail/account-detail.component";

const routes: Routes = [
     { path: '', redirectTo: '/customers', pathMatch: 'full' },
     { path: 'heroes',  component: HeroesComponent},
     { path: 'details/:id/edit', component: HeroDetailComponent},
     { path: 'dashboard', component: DashboardComponent },
     { path: 'branches',  component: BranchesComponent},
     { path: 'customers',  component: CustomersComponent},
     { path: 'customers/:id/edit', component: CustomerDetailComponent},
     { path: 'accounts',  component: AccountsComponent},
     { path: 'accounts/:customer_id/edit',  component: AccountDetailComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
