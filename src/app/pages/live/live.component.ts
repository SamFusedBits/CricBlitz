import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../api-call.service';
import { CommonModule } from '@angular/common';
import { MatchCardComponent } from '../../match-card/match-card.component';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [CommonModule,MatchCardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit {

    liveMatches:any
    loading: any;
    constructor(private _api:ApiCallService){
      
    }
  ngOnInit(): void {
    this.loadLiveMatches();
  }

  private loadLiveMatches() {
    this._api.getLiveMatches().subscribe({
      next: data => {
        console.log(data);
        this.liveMatches=data //Assigning data in liveMatches variable
      },
      error: error => {
        console.log(error);
      }
    });
  }
    refreshPage() {
      window.location.reload();
    }
  }
