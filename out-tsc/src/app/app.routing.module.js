var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/common/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ComixAllComponent } from './components/comix/comix-all/comix-all.component';
import { ComixCreateComponent } from './components/comix/comix-create/comix-create.component';
import { ComixEditComponent } from './components/comix/comix-edit/comix-edit.component';
import { ComixDetailsComponent } from './components/comix/comix-details/comix-details.component';
import { OrderConfirmComponent } from './components/order/order-confirm/order-confirm.component';
import { OrderFinishComponent } from './components/order/order-finish/order-finish.component';
import { OrderMyComponent } from './components/order/order-my/order-my.component';
import { OrderAllComponent } from './components/order/order-all/order-all.component';
var routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {
        path: 'auth', children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ]
    },
    {
        path: 'comix', children: [
            { path: 'all', component: ComixAllComponent },
            { path: 'create', component: ComixCreateComponent },
            { path: 'edit/:id', component: ComixEditComponent },
            { path: 'delete/:id', component: ComixDetailsComponent },
            { path: 'details/:id', component: ComixDetailsComponent },
        ]
    },
    {
        path: 'order', children: [
            { path: 'confirm', component: OrderConfirmComponent },
            { path: 'finish', component: OrderFinishComponent },
            { path: 'my', component: OrderMyComponent },
            { path: 'all', component: OrderAllComponent },
        ]
    },
    { path: '**', redirectTo: '/home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
;
//# sourceMappingURL=app.routing.module.js.map