import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  
})
export class WorkComponent implements OnInit {

  public arrayHm:any[];

   public  id= 0;
   public homework ='';
   public description = '';
   public btn_delete = true ;

   public newHw:any = {
   
   };
  
  constructor() { 

    this.arrayHm = [
     
    ]

   

   
  }

  ngOnInit(): void {
  }

  modalDelete(){
    Swal.fire({

      icon:'success',
      text:'Delete All Successfuly',
      showCloseButton: false,
      timerProgressBar: true,
      timer: 2000,
      showConfirmButton: false,
      showCancelButton: false,
      position:'center'

    })
  }

  idRandom(){
    this.id = Math.floor(Math.random() * 100);
    console.log(this.id);
    
  }

 prevent(e:any){
  e.preventDefault()
 }
  addNewHw(){
    this.newHw = {
      id:this.idRandom(),
      homework: this.homework,
      description: this.description
    }
    this.arrayHm.push(this.newHw);

    this.description = '';
    this.homework = '';

    
  }


  deleteAll(){

  this.arrayHm = [];
    this.modalDelete()
  }



 

}
