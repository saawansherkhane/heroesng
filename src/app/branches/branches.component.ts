import { Component, OnInit } from '@angular/core';
import { BranchesApiService } from '../branches-api.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
  branches: any[];
  name: string;
  submitted = false;

  constructor(private branch_service:  BranchesApiService) { }

  ngOnInit() {
    this.brancheslist();
  }

  onSubmit(name: string) {
    this.submitted = true;
    console.log('B error : ' + JSON.stringify(this.name));
    this.branch_service.branchcreate(this.name)
      .subscribe(()=> this.brancheslist() );
  }

  brancheslist() {
      this.branch_service.listbranches()
        .subscribe(data => {
          this.branches = data;
          console.log('brancheslist: ' + JSON.stringify(this.branches));
        });
  }

}
