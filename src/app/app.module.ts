import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule} from '@angular/material/grid-list';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { HackerNewsService } from './hacker-news.service';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    ArticleComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    HttpClientModule,
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
    ],
  providers: [
    HackerNewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
