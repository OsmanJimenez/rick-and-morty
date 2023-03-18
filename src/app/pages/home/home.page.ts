import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { EndpointsService } from 'src/app/services/api/endpoints.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  url = this.endpointsService.url;
  characters: any;
  charactersOld: any;
  especies: any;
  status: any;
  count: any;
  flagCount = false

  selectedEspecie: string = '';
  selectedStatus: string[] = [];
  filteredCharacters: string[] = [];

  constructor(
    private endpointsService: EndpointsService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.characters = [];
    this.especies = [];
    this.status = [];
    this.apiService
      .getAll(this.url.character)
      .pipe(first())
      .subscribe(
        (res) => {
          this.characters = res.results;
          this.charactersOld = res.results;
          console.log(this.characters);

          for (let i = 0; i < this.characters.length; i++) {
            const especie = this.characters[i].species;

            if (!this.especies.includes(especie)) {
              this.especies.push(especie);
            }

          }

          for (let i = 0; i < this.characters.length; i++) {
            const statu = this.characters[i].status;

            if (!this.status.includes(statu)) {
              this.status.push(statu);
            }
          }
        },
        (err) => { }
      );
  }

  filtroPorEspecie() {
    console.log(this.selectedEspecie)
    this.characters = this.charactersOld.filter((character: any) => character.species == this.selectedEspecie);
    console.log(this.characters)
  }

  filterCharacters(event: any) {
    const searchTerm = event.target.value;
    if (searchTerm !== '') {
      this.characters = this.characters.filter((character: any) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      this.flagCount = true;

      this.count = this.characters.length
      
    } else {
      this.flagCount = false;

      this.characters = this.charactersOld;
    }
  }

  changeStatus() {
    this.filteredCharacters = this.characters.filter((character: any) => {
      return this.selectedStatus.includes(character.status);
    });
  }


}
