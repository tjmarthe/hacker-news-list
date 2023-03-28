import { Component, Input, OnInit } from '@angular/core';
import { NewsStory } from '../news-story.model';

@Component({
  selector: 'app-article-component',
  templateUrl: 'article-component.component.html',
})
export class ArticleComponentComponent implements OnInit {
  @Input()
  article!: NewsStory;

constructor() { }

  ngOnInit(): void {
  }

}
