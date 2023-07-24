import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  searchToggle: boolean = false;

  constructor(private data: DataService){}

  ngOnInit() {
    this.data.canSearch.subscribe(res => this.searchToggle = res)
  }

  search(){
    this.searchToggle = !this.searchToggle
    this.data.searchToggle(this.searchToggle);
  }
}
