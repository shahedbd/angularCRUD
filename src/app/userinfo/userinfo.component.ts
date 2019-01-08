import { Component, OnInit } from '@angular/core';
import UserInfo from '../Userinfo';
import { UserinfoService } from '../userinfo.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})

export class UserinfoComponent implements OnInit {

  userinfos: UserInfo[];

  constructor(private ui: UserinfoService) { }

  ngOnInit() {
    this.ui
      .getUserInfo()
      .subscribe((data: UserInfo[]) => {
        this.userinfos = data;
        console.log(data);
    });
  }
}

