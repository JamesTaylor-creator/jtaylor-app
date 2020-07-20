import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  profile: any = "";

  constructor(private profileService: ProfileService) { }

  ngOnInit(){
    this.profile = this.profile.userProfile;
    //console.log(this.profileService.userProfile);
  }

}
