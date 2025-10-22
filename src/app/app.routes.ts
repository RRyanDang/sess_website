import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WhoWeAreComponent } from './about/who-we-are/who-we-are.component';
import { OurTeamComponent } from './about/our-team/our-team.component';
import { GetInvolvedComponent } from './about/get-involved/get-involved.component';
import { ResourcesComponent } from './resources/resources.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { MsalGuard } from '@azure/msal-angular';
import { SecComponent } from './sec/sec.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'Seneca Engineering Students\' Society'},
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'about', 
        loadChildren: () => import('./about/about.route')
        .then(r=>r.aboutRoutes)},
    { path: 'events', 
        loadChildren: () => import('./events/events.route')
        .then (r=>r.eventsRoutes)
    },
    { path: 'sec', component: SecComponent },
    {path: 'meet-the-team',component: MeetTheTeamComponent}
    // { path: 'resources', component: ResourcesComponent },
    // { path: 'auth', component: AuthComponent },
    // { path: 'profile', component: ProfileComponent, canActivate: [MsalGuard]},
];
