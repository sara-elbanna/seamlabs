import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.less']
})
export class SubscriptionComponent implements OnInit {

  form: FormGroup;
    
  email = new FormControl("", Validators.required);
  constructor(private http : HttpClient, fb: FormBuilder, private notification: NzNotificationService) { 
      this.form = fb.group({
          "email": this.email,
          // "password":["", Validators.required]
      });
  }

  ngOnInit(): void {
    
  }
  createNotification(type: string, title:string): void {
    this.notification.create(
      type,
      title,
      ''
    );
  }
  onSubmit(){
    console.log('formmmm',this.form)
    // this.http.post('http://dummy.restapiexample.com/api/v1/create',{"name":"test","salary":"123","age":"23"})
    this.http.post('https://example.com/api/subscribe',{data: this.form.value.email})
    .subscribe(
      res =>{
        console.log('33',res)
        this.createNotification('success', 'Sent successfully!')
      } ,
      (error)=> {
        console.log('err',error)
        this.createNotification('error', 'Failed!')
      } 
    )
    
  }

}
