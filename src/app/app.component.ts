import { Component } from '@angular/core';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prj-api';

  getData: any;
  constructor(private post: PostService) {

  }
  ngOnInit() {
    this.post.getPost().subscribe(response => {
      this.getData = response;
    })
  }
}
