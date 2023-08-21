import { Route } from '@angular/router';
import { AccessProfilesComponent } from './access-profiles/access-profiles.component';
import { ClinicalSettingsComponent } from './clinical-settings/clinical-settings.component';
import { DevicesComponent } from './devices/devices.component';
import { ReasonsForActionsComponent } from './reasons-for-actions/reasons-for-actions.component';
import { ServiceQueuesComponent } from './service-queues/service-queues.component';
import { StatusMonitorComponent } from './status-monitor/status-monitor.component';
import { TemplatesOfKioskComponent } from './templates-of-kiosk/templates-of-kiosk.component';
import { TicketPrioritiesComponent } from './ticket-priorities/ticket-priorities.component';
import { UsersComponent } from './users/users.component';


export const appRoutes: Route[] = [
    { path: '', redirectTo:'service-queues', pathMatch:'full'},
    { path: 'access-profiles', component: AccessProfilesComponent},  
    { path: 'clinical-settings', component: ClinicalSettingsComponent},  
    { path: 'devices', component: DevicesComponent},  
    { path: 'reason-actions', component: ReasonsForActionsComponent},  
    { path: 'service-queues', component: ServiceQueuesComponent},  
    { path: 'status-monitor', component: StatusMonitorComponent},  
    { path: 'kiosk', component: TemplatesOfKioskComponent},  
    { path: 'ticket-priorites', component: TicketPrioritiesComponent},  
    { path: 'users', component: UsersComponent},  
];
