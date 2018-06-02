import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './components/main/main.component';
import { SharedModule } from './modules/shared/shared.module';
import { RoutingModule } from './modules/core/routing/routing.module';
import { RouterModule } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
    declarations: [
        MainComponent,
        EntryComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        SharedModule,
        RoutingModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [EntryComponent]
})
export class AppModule { }
