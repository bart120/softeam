import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article.model';


@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    constructor(private http: HttpClient) { }


    getAllArticle(): Array<Article> {

        this.http.get()
        return null;
    }
}
