import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sorting';
  public in="";
  public error="";
  public Beforesorting="";
  public Aftersorting="";
  public nandhini:number[]=[];
  constructor(){ }

  ngOnInit(){

  }
  Add(){
    var max_length = 5;
            var isnum = /^\d+$/.test(this.in);
            if (isnum == true) {
                if (this.nandhini.length >= max_length) {
                    this.error = "Array is full";
                    this.in= "";

                } else {
                    var n = parseInt(this.in);
                    this.nandhini.push(n);
                    this.in= "";
                    this.error= "Element is entered";
                    this.Beforesorting= "";
                    this.Aftersorting= "";
                }

            } else {
                this.error= "Only Numbers are allowed";
                this.in= "";
                this.Beforesorting= "";
                this.Aftersorting= "";
            }
  }
  Clear() {
    this.nandhini = [];
    this.error= "Array is emptied";
    this.in= "";
    this.Beforesorting= "";
    this.Aftersorting= "";


}

Sort() {
  if (this.nandhini.length == 5) {
      this.error= "";
      this.Beforesorting= "Before Sorting :\n" + this.nandhini.join(", ");
      this.nandhini.sort(function(a,b){return a-b});
      this.Aftersorting= "After Sorting :\n" + this.nandhini.join(", ");
  } else {
      this.error= "Array length should be 5 for sorting: Add elements";
      this.Beforesorting= "";
      this.Aftersorting= "";

  }

}
}
