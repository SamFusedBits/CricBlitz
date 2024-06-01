import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsData: any;
  condition: boolean = true; // Declare the 'condition' property here

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    const apiKey = process.env['apiKey']; // Replace with the NewsAPI key from https://newsapi.org/docs/authentication
    //const country = 'in'; // Specify the country parameter 
    const query = 'cricket'; // Specify the query parameter for cricket news
    const apiUrl = `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${apiKey}`;
  
    this.http.get(apiUrl).subscribe({
      next: (data: any) => {
        this.newsData = data;
      },
      error: (error) => {
        console.error('Error fetching news:', error);
      }
    });
  }
}
