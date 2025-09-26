import { Component, inject, signal } from '@angular/core';
import { DisneyCharacter, DisneyCharacterSingle } from '../../models/disney-character';
import { ActivatedRoute } from '@angular/router';
import { DisneyJsonApi } from '../../services/disney-json-api';

@Component({
  selector: 'app-character-page',
  imports: [],
  templateUrl: './character-page.html',
  styleUrl: './character-page.css'
})
export class CharacterPage {
  character = signal<DisneyCharacterSingle | null>(null)
  characterId?: number
  private readonly disneyJsonApi: DisneyJsonApi = inject(DisneyJsonApi)
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.characterId = +params.get('id')!
        this.fetchCharacter()
      }
    })
  }



  fetchCharacter() {
    this.disneyJsonApi.getCharacter(this.characterId!).subscribe({
      next: data => {
        console.log('Disney Response', data);
        this.character.set(data)
        console.log('Disney test', this.character());
      },
      error: error => console.error(error)
    })
  }
}
