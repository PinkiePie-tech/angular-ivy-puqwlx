import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import {
  IAbility,
  IAbilityDetail,
  IAbilityList,
  IAbilityName,
  IAbilityPokemon,
  IPokeList,
  IPokemon,
  IPokemonDetail,
  IPokemonShortDetail,
  IPokemonType,
} from '../models/poke.interface';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Toutes les fonctions vont provenir de la web api https://pokeapi.co/api/v2, on change d'API histoire de varier les plaisirs
   * Tu auras à créer les modèles des réponses http de l'API, et dans certains cas, les interfaces de sorties, et dans d'autre cas, un model dont que je t'aurai construit :D
   * Pour chaque exercice, je te donnerai l'url, cette url contiendra parfois des variables qui seront en en-têtes de la fonction
   * Ton code devra être contenu dans la fonction qui lui es associée, des interfaces seront manquante dans certain cas, il sera à ta charge de les écrire
   * le `return of()` est juste présent pour que tu puisses voir les résultats, un fois la fonction codé, tu devras supprimer cette ligne de code pour voir le résultat apparaitre dans la console
   */

  public getAnObjectWithUrl(name: string) {
    /** l'url pour cette api sera la suivante : `https://pokeapi.co/api/v2/ability/${name}`, aucune interface n'a été créé pour cette route, il faudra donc remplacer "any" par le type que tu auras créé, ce type correspondra exactement au retour de l'api
     */
    return this.httpClient
      .get<IPokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .pipe(
        map((value: any) => {
          return value;
        })
      );
  }
}
