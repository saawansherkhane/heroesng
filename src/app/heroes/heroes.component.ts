// import { Component, OnInit } from '@angular/core';
// import { Hero } from '../hero';
// import { HeroService } from '../hero.service';
// import { HerosApiService } from '../heros-api.service';

// @Component({
//   selector: 'app-heroes',
//   templateUrl: './heroes.component.html',
//   styleUrls: ['./heroes.component.css']
// })
// export class HeroesComponent implements OnInit {

//   heroes: Hero[];
//   heros = [];
  
//   constructor(private heroService: HeroService, private herosapiService: HerosApiService) { }

//   ngOnInit() {
//     this.getHeroes();
//     this.getHeros();
//   }

//   getHeros(): void {
//             this.herosapiService.getHerosapi()
//             .subscribe(heros => {
//             this.heros = heros; 
//             console.log('My Heros: ' + JSON.stringify(this.heros));
//             },
//              error => console.log('Error!'));
//   }

//   getHeroes(): void {
//             this.heroService.getHeroes()
//                 .subscribe(heroes => this.heroes = heroes);
//   }

//   add(name: string): void {
//   name = name.trim();
//   if (!name) { return; }
//   this.heroService.addHero({ name } as Hero)
//     .subscribe(hero => {
//       this.heroes.push(hero);
//     });
//   }  

// }




import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  name: string;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
    console.log('My Heroes: ' + JSON.stringify(this.heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    // this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
    console.log('Delete Hero: ' + (this.heroes));
  }


}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/