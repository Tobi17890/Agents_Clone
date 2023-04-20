import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SectionComponent } from './section/section.component';
import { BlocksComponent } from './blocks/blocks.component';
import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { TeamsComponent } from './teams/teams.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuestionsComponent } from './questions/questions.component';
import { PrefooterComponent } from './prefooter/prefooter.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SectionComponent,
    BlocksComponent,
    SellComponent,
    BuyComponent,
    TestimonialsComponent,
    ScenariosComponent,
    TeamsComponent,
    QuestionsComponent,
    PrefooterComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
