import { CyberService } from './cyber.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class  {
//   title = 'cyberwaves';
// }

export class AppComponent implements OnInit {

  weatherData:any;
  constructor(private cyber:CyberService) { }

  ngOnInit(): void {

    this.cyber.getData().subscribe((result)=>{
       
      this.weatherData=result;
      console.log(result);
    })

   
  
  }

  

}
