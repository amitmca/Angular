import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { UserBasicProfileService } from 'src/app/services/userBasicProfileService.service';
import { UserBasicProfile } from 'src/app/model/userBasicProfile';

@Component({
  selector: 'app-userBasicProfile',
  templateUrl: './userbasicprofile.component.html',
  encapsulation: ViewEncapsulation.None
})

export class UserBasicProfileComponent implements OnInit {

  profileId: number = 1109;
  firstName : string = '';
  lastName : string = '';
  cols: any[];
  userBasicProfileData : UserBasicProfile[] = [];

  constructor(private userBasicProfileService: UserBasicProfileService) {
  }

  ngOnInit() {
    this.getUserBasicProfileList();
   
    this.cols = [
        { field: 'profileId', header: 'Profile Id' },
        { field: 'firstName', header: 'First Name' },
        { field: 'lastName', header: 'Last Name' },
        { field: 'gender', header: 'Gender' },
        { field: 'birthDate', header: 'Date of Birth' },
        { field: 'maritalStatus', header: 'Marital Status' },
        { field: 'religion', header: 'Religion' },
        { field: 'caste', header: 'Caste' },
        { field: 'subCaste', header: 'Sub Caste' },
        { field: 'password', header: 'Password' },
        { field: 'status', header: 'Status' },
        { field: 'albumStatus', header: 'Album Status' },
    ];
  }

  getUserBasicProfileList() {
    this.userBasicProfileService.getUserBasicProfileList().subscribe(
      result => {
        result.forEach(record => {
          this.profileId = record["profileId"];
          this.firstName = record["firstName"];
          this.lastName  = record["lastName"];
          this.userBasicProfileData.push({ 'profileId' : record["profileId"],
                                           'firstName':record["firstName"],
                                           'lastName':record["lastName"],
                                           'gender':record["gender"],
                                           'birthDate':record["birthDate"],
                                           'maritalStatus':record["maritalStatus"],
                                           'religion':record["religion"],
                                           'caste':record["caste"],
                                           'subCaste':record["subCaste"],
                                           'password':record["password"],
                                           'status':record["status"],
                                           'albumStatus':record["albumStatus"],
                                        });
        });
      },
      error => {
        console.error('error in userBasicProfileService.getUserBasicProfileList');
      }
    );
  }

  getUserBasicProfileByProfileId(profileId) {
    this.userBasicProfileService.getUserBasicProfileByProfileId(this.profileId).subscribe(
      result => {
          console.log(result["profileId"]);
          console.log(result["firstName"]);
      },
      error => {
        console.error('error in userBasicProfileService.getUserBasicProfileByProfileId');
      }
    );
  }

}
