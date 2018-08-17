var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth//register/register.component';
import { ComixAllComponent } from './components/comix/comix-all/comix-all.component';
import { ComixCreateComponent } from './components/comix/comix-create/comix-create.component';
import { ComixDetailsComponent } from './components/comix/comix-details/comix-details.component';
import { ComixEditComponent } from './components/comix/comix-edit/comix-edit.component';
import { ComixDeleteComponent } from './components/comix/comix-delete/comix-delete.component';
import { OrderConfirmComponent } from './components/order/order-confirm/order-confirm.component';
import { OrderFinishComponent } from './components/order/order-finish/order-finish.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './components/common/home/home.component';
import { OrderMyComponent } from './components/order/order-my/order-my.component';
import { OrderAllComponent } from './components/order/order-all/order-all.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './components/auth/auth.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                LoginComponent,
                RegisterComponent,
                ComixAllComponent,
                ComixCreateComponent,
                ComixDetailsComponent,
                ComixEditComponent,
                ComixDeleteComponent,
                OrderConfirmComponent,
                OrderFinishComponent,
                HeaderComponent,
                FooterComponent,
                HomeComponent,
                OrderMyComponent,
                OrderAllComponent
            ],
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                ToastrModule.forRoot(),
                FormsModule,
                HttpClientModule,
                AppRoutingModule
            ],
            providers: [AuthService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map