
import { Injectable } from '@angular/core';

@Injectable()
export class PatternsService {

  patternStrong =  "(?=^.{8,}$)((?=.*\\\d)(?=.*\\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$";
  
  strength = false;
  strengthValue = .1;
  strengthPer = "10%";
  strengthTitle = "Very Poor";

  num = false;
  special = false;
  upper =  false;
  lower = false;

  regNum = new RegExp("(?=^.*[0-9])");
  regUpper = new RegExp("(?=^.*[A-Z]).*$");
  regLower = new RegExp("(?=^.*[a-z]).*$");
  regSpec = new RegExp("(?=^.*[!@#$%^&*])");

  getnum(value){
    return (this.regNum.test(value));
  }
  
  getupper(value){
    return (this.regUpper.test(value));
  }

  getlower(value){
    return (this.regLower.test(value));
  }

  getspecial(value){
    return (this.regSpec.test(value));
  }


  constructor() { }

}
