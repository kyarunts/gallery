import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsMainComponent } from './components/artists-main/artists-main.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: ArtistsMainComponent }
        ])
    ],
    declarations: [ArtistsMainComponent]
})
export class ArtistsModule { }
