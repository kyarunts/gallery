import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesMainComponent } from './components/stories-main/stories-main.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: StoriesMainComponent }
        ])
    ],
    declarations: [StoriesMainComponent]
})
export class StoriesModule { }
