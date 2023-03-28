import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { ObjectUnsubscribedErrorCtor } from 'rxjs/internal/util/ObjectUnsubscribedError';
import {HackerNewsService} from '../hacker-news.service'
import { NewsStory } from '../news-story.model';
import { StoryDataSource } from '../story-data-source';
import { MatFormField } from '@angular/material/form-field';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
//  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  data$!: Observable<string[]>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  newsList: any;
  dataSource = new MatTableDataSource();
  subscription: Subscription;
  columns: string[] = ['title', 'url'];


  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }


  constructor(private service:HackerNewsService) {
  }

  ngOnInit(): void {
    this.subscription = this.service.getHackerNewsList().subscribe(
      s => this.dataSource.data = s
    )
    }

    applyFilter(event: Event){
      this.dataSource.filter = (event.target as HTMLInputElement).value
    }

}
