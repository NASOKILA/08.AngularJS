
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    exports: [HomeComponent],
    declarations: [HomeComponent],
    providers: []
})

export class HomeModule { }

