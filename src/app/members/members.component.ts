import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.sass']
})
export class MembersComponent implements OnInit {

  search = '';
  members: any;

  constructor(private apiService: ApiService, private profileService: ProfileService){}

  ngOnInit() {
    this.apiService.get().subscribe((data) => {
      this.members = data.results;
     //console.log(data);
    })
  }

  setMemberProfile(members: any){
    this.profileService.userProfile = this.members;
    console.log(this.profileService.userProfile);
  }
}
