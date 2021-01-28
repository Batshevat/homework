import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WeatherPageComponent } from "./weather-page/weather-page.component";

const routes: Routes = [
    {
        path: 'weather',
        component: WeatherPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
