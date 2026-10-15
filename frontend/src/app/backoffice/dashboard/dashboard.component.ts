import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(
    private Main: MainService
  ) {

  }
  
  userLoged: any = undefined;
  isLoading: boolean = true;

  ngOnInit(): void {
    this.userLoged = this.Main.getSession();
    
    this.isLoading = false;
  }

}
