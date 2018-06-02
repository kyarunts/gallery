import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsMainComponent } from './components/items-main/items-main.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: ItemsMainComponent }
        ])
    ],
    declarations: [ItemsMainComponent]
})
export class ItemsModule { }
