import { Component, OnInit } from '@angular/core';
import { PatternsService } from './../patterns.service';

@Component({
  selector: 'app-parameter-box',
  templateUrl: './parameter-box.component.html',
  styleUrls: ['./parameter-box.component.css']
})
export class ParameterBoxComponent implements OnInit {


  constructor(private pattern : PatternsService ){}

  input(password){

     let reg1 = new RegExp("(?=^.{8,}$)((?=.*\\\d)(?=.*\\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$");
     let reglen = new RegExp("(?=^.{6,}$)");
     let regChar = new RegExp("(?=^.*[A-Z])(?=.*[a-z]).*$");
     let regNum = new RegExp("(?=^.*[0-9])");

     if(reg1.test(password.value)){

        this.pattern.strengthValue = 1;
        this.pattern.strengthPer = "100%";
        this.pattern.strengthTitle = "Very Strong";

     }else if(regChar.test(password.value) && regNum.test(password.value) && reglen.test(password.value)){

        this.pattern.strengthValue = .8;
        this.pattern.strengthPer = "80%";
        this.pattern.strengthTitle = "Strong";

     }else if(regChar.test(password.value) && reglen.test(password.value)){

        this.pattern.strengthValue = .6;
        this.pattern.strengthPer = "60%";
        this.pattern.strengthTitle = "Medium";

     }else if(regChar.test(password.value) && reglen.test(password.value)){

        this.pattern.strengthValue = .6;
        this.pattern.strengthPer = "40%";
        this.pattern.strengthTitle = "Poor";

     }else{

        this.pattern.strengthValue = .3;
        this.pattern.strengthPer = "20%";
        this.pattern.strengthTitle = "Very Poor";
     }


     if(password.value === ""){
        password.type = "text";
     }else{
        setTimeout(function(){
        password.type = "password";
        }, 3000)
     }
  }

  ngOnInit() {
  }

}
