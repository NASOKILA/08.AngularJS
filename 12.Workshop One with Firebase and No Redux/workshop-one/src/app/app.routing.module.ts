import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AuthGuard } from './components/auth/auth.guard';
import { RecipeModule } from './components/recipe/recipe.module';
import { RecipeGuard } from './components/recipe/recipe.guard';

const routes = [
    {
        path: 'auth', children: [
            { path: 'signin', component: SigninComponent },
            { path: 'signup', component: SignupComponent }
        ], canActivate: [RecipeGuard]
    },
    {
        path: 'recipes',
        loadChildren: () => RecipeModule,
        canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { };
