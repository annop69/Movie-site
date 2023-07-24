import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//service
import { MovieService } from 'src/app/services/movie.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  textInput: string = '';
  upcomingMovieImages: any[] = [];
  topMovieImages: any[] = [];
  selectedMovie: any = {
    url : '',
    title: '',
    about: '',
    info: '',
    director: '',
    casts: ''
  }
  isSelected: boolean = false;
  searchToggle: boolean = false;

  constructor(private movieService: MovieService,
              private data: DataService,
              private router: Router){}

  ngOnInit() {
    this.data.canSearch.subscribe(res => this.searchToggle = res)
    this.movieService.getUpcomingMovies().subscribe((res: any) => {
      if(res.results){
        for(let x of res.results){
          if(!this.isSelected){
            this.selectedMovie.url = x.primaryImage.url;
            this.selectedMovie.title = x.titleText.text;
            this.selectedMovie.about = x.plot.plotText.plainText;
            for(let a of x.genres.genres){
                this.selectedMovie.info= a.text + " | " + x.releaseYear.year + " | "
                + x.runtime.seconds;
            }

            for(let b of x.directors){
              for(let c of b.credits){
                this.selectedMovie.director = c.name.nameText.text
              }
            }

            for(let d of x.principalCast){
              for(let e of d.credits){
                this.selectedMovie.casts = e.name.nameText.text
              }
            }

            this.isSelected = true;
          }

          
          if(x.primaryImage){
            this.upcomingMovieImages.push({
              url: x.primaryImage.url
            })
          }else{
            this.upcomingMovieImages.push({
              url: '../../../assets/images/No-Image-Placeholder.png'
            })
          }
        
      }
    }
    });

    this.movieService.getTopRatedMovies().subscribe((res:any) => {
      if(res){
        for(let x of res.results){
          if(x.primaryImage){
            this.topMovieImages.push({
              url: x.primaryImage.url
            })
          }else{
            this.topMovieImages.push({
              url: '../../../assets/images/No-Image-Placeholder.png'
            })
          }
        }
      }
    })
  }

  onSubmit(){
      localStorage.setItem('textInput', this.textInput);
     this.router.navigate(['/video-details']).then(() => {
      window.location.reload();
     });
     
  }
}
