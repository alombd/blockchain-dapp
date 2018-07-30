import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material';

import {HttpModule} from "@angular/http";
import {MatInputModule} from '@angular/material';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BlockComponent } from './block/block.component';
import { MessagesComponent } from './messages/messages.component';
import { EventComponent } from './event/event.component';
import { Web3Component } from './web3/web3.component';
import { transectionComponent } from './transection/transection.component';
const appRoutes: Routes = [
   {
      path: '',
      component: UserloginComponent
   },
   {
      path: 'app-mainpage',
      component: MainpageComponent
   },
   {
    path: 'app-block',
    component: BlockComponent
   },
   {
    path: 'app-message',
    component: MessagesComponent
   },
   {
    path: 'app-event',
    component: EventComponent
   },
   {
    path: 'app-web3',
    component: Web3Component
   },
   {
    path: 'app-transection/:id',   component: transectionComponent
    }
];

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      UserloginComponent,
      MainpageComponent,
      BlockComponent,
      MessagesComponent,
      EventComponent,
      Web3Component,
      transectionComponent
   ],
   
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule,
      HttpModule,
      MatTableModule,
      MatInputModule
   ],
   providers: [ ],
   bootstrap: [AppComponent]
})

export class AppModule { }