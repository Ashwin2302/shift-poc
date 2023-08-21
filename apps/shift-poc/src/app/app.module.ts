import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableComponent } from './table/table.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ServiceQueuesComponent } from './service-queues/service-queues.component';
import { ClinicalSettingsComponent } from './clinical-settings/clinical-settings.component';
import { TicketPrioritiesComponent } from './ticket-priorities/ticket-priorities.component';
import { TemplatesOfKioskComponent } from './templates-of-kiosk/templates-of-kiosk.component';
import { StatusMonitorComponent } from './status-monitor/status-monitor.component';
import { ReasonsForActionsComponent } from './reasons-for-actions/reasons-for-actions.component';
import { UsersComponent } from './users/users.component';
import { AccessProfilesComponent } from './access-profiles/access-profiles.component';
import { DevicesComponent } from './devices/devices.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    TableComponent,
    ServiceQueuesComponent,
    ClinicalSettingsComponent,
    TicketPrioritiesComponent,
    TemplatesOfKioskComponent,
    StatusMonitorComponent,
    ReasonsForActionsComponent,
    UsersComponent,
    AccessProfilesComponent,
    DevicesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
