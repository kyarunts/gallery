import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: AdminMainComponent },
        ])
    ],
    declarations: [AdminMainComponent]
})
export class AdminModule { }
