import { Component, OnInit } from '@angular/core';
import { CyberService } from '../cyber.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})



export class ListComponent implements OnInit {
  weatherData:any;
  constructor(private cyber:CyberService) { }

  ngOnInit(): void {

    this.cyber.getData().subscribe((result)=>{
       
      this.weatherData=result;
      console.warn(result);
    })

   
  
  }

  

  
}
