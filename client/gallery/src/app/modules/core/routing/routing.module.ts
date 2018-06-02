import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../../../components/main/main.component';

const appRoutes: Routes = [
    { path: 'artists', loadChildren: '../../artists/artists.module#ArtistsModule' },
    { path: 'stories', loadChildren: '../../stories/stories.module#StoriesModule' },
    { path: 'items', loadChildren: '../../items/items.module#ItemsModule' },
    { path: '', component: MainComponent },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: []
})
export class RoutingModule { }
