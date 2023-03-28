import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Injectable } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs";
import { HackerNewsService } from "./hacker-news.service";
import { NewsStory } from "./news-story.model";

@Injectable()
  export class StoryDataSource extends DataSource<NewsStory>{
    stories$ = new BehaviorSubject<NewsStory[]>([]);
    public paginator: MatPaginator;

    constructor(private hackNews: HackerNewsService) {
      super();
    }

    override connect():Observable<NewsStory[]>{
      return this.stories$.asObservable();
    }

    override disconnect(): void {
      this.stories$.complete();
    }

    getStories(): void{
      this.hackNews.getHackerNewsList().subscribe((stories)=>{this.stories$.next(stories)})
    }

  }
