import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule }    from '@angular/common/http';
import { BranchesApiService } from './branches-api.service';

describe('BranchesApiService', () => {

  let branch = {name: "hebbal"};
  let branchservice: BranchesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BranchesApiService]
    });
    branchservice = TestBed.get(BranchesApiService);
  });

  describe('Branch Creation', ()=> {

    it('it should create branch', (done)=> {
       branch.name = "koramangala";
       branchservice.branchcreate(branch.name).subscribe(data => {
         expect(data).toBe("hebbal");
           done();
         },
         (error)=>{
           // expect(error).toBe("is empty");
           done();
         }
       );
    });

  });

  // it('should ...', inject([BranchesApiService], (service: BranchesApiService) => {
  //   expect(service).toBeTruthy();
  // }));

});
