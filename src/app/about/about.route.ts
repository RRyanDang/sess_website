
import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';


export const aboutRoutes: Routes = [
    { path: '', component: AboutComponent, children: [
        { path: '', redirectTo: 'who-we-are', pathMatch: 'full'},
        { path: 'who-we-are', component: WhoWeAreComponent },
        { path: 'our-team', component: OurTeamComponent },
        { path: 'get-involved', component: GetInvolvedComponent}
    ]},
]