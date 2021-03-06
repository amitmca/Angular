import { Component } from '@angular/core';
import { Observable} from 'rxjs/Rx';

import { GitHubService } from './github.service';

import { repos} from './repos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})


export class AppComponent
{

    userName = 'tektutorialshub';
    repos: repos[];

    loading = false;
    errorMessage = '';

    constructor(private githubService: GitHubService) {
    }

    public getRepos() {
        this.loading = true;
        this.errorMessage = '';
        this.githubService.getRepos(this.userName)
            .subscribe((response) => {this.repos = response;},
                       (error) => {
                           this.errorMessage = error.message; this.loading = false; 
                        },
                        () => {this.loading = false;})

    }

}




