import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthenticatedRoute } from './shared/authenticated-route.service';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },

    {
        path: 'courses', children: [
            { path: 'details', component: AboutComponent },
            { path: 'create', component: AboutComponent },
            { path: 'edit/:id', component: AboutComponent },
        ]
    },

    {
        path: 'contact/:name/:id',
        component: ContactComponent,
        canActivate: [AuthenticatedRoute]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthenticatedRoute]
})

export class AppRoutesModule { }
