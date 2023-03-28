import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsStory } from './news-story.model';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  constructor(private client: HttpClient) {
  }

  public getHackerNewsList(): Observable<NewsStory[]>{
      return this.client.get<NewsStory[]>('https://localhost:7040/News');
  }

}
