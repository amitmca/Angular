import { Component } from '@angular/core';
import { FreeApiService } from './services/freeapi.service';
import { Posts } from './classes/posts'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularServices';
  lstPosts : Posts[];
  objPosts : Posts[];
  constructor(private freeApiService : FreeApiService){}

  ngOnInit(){
    this.freeApiService.getCommentParameter().subscribe( data => {
    this.lstPosts = data;
    });

    var posts = new Posts();
    posts.body =  'testBody';
    posts.title = 'testTitle';
    posts.userId = 5;

    this.freeApiService.post(posts).subscribe( data => {
      this.objPosts = data;
      });
  }
}
