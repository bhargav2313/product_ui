/*import { Routes } from '@angular/router';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', component: Login }
];*/
/*import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'dashboard', component: Dashboard }
];*/
import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { MainLayout } from './layout/main-layout/main-layout';
import { Users } from './pages/users/users';
import { ApprovalConfig } from './pages/approval-config/approval-config';
import { ProductApprovals } from './pages/product-approvals/product-approvals';
import { ProductStatus } from './pages/product-status/product-status';

export const routes: Routes = [
  { path: '', component: Login },

  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'users', component: Users },
      { path: 'approval-config', component: ApprovalConfig },
      { path: 'product-approvals', component: ProductApprovals },
      { path: 'product-status', component: ProductStatus }
    ]
  }
];