import { Component } from '@angular/core';
import { FormGroup , FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'add-user',
  templateUrl: './adduserbasicprofile.component.html'
})
export class AddUserBasicProfileComponent {
  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder ) { }
  ngOnInit() {  
    this.addForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
    });
  }
}
