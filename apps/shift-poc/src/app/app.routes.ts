import { Route } from '@angular/router';
import { PlatformComponent } from './platform/platform.component';
import { ProductComponent } from './product/product.component';
import { CorporateComponent } from './corporate/corporate.component';
import { ModuleComponent } from './module/module.component';
import { LicenseComponent } from './license/license.component';

export const appRoutes: Route[] = [
    { path: '', redirectTo:'platform', pathMatch:'full'},
    { path: 'platform', component: PlatformComponent},  
    { path: 'corporate', component: CorporateComponent},  
    { path: 'product', component: ProductComponent},  
    { path: 'module', component: ModuleComponent},  
    { path: 'license', component: LicenseComponent},  
];
