import { Component, OnInit } from '@angular/core';
import { SessionLoggerService } from 'src/app/providers/session-logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit{
  movieDetails: any = []

  constructor(private sl: SessionLoggerService,
              private route: Router){}

  ngOnInit(): void {
    for(let x of this.sl.movieDetails){
        this.movieDetails = x;
      }

      for(let x of this.movieDetails){
        if(!x.primaryImage.url){
          x.primaryImage.url = '';
        }

        if(!x.titleText.text){
          x.titleText.text = '';
        }

        if(!x.plot.plotText.plainText){
          x.plot.plotText.plainText = '';
        }
      }

      console.log("movie details", this.movieDetails)
    }

    goHome(){
      localStorage.removeItem('textInput');
      this.route.navigate(['/']).then(() => {
        window.location.reload();
       });;
    }
  }

