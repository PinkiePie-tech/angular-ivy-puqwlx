import { Component } from "@angular/core";
import { ArmService } from "../shared/Services/arm.service";
import { BreastService } from "../shared/Services/breast.service";
import { CorpService } from "../shared/Services/corp.service";
import { FingerService } from "../shared/Services/finger.service";
import { FootService } from "../shared/Services/foot.service";
import { HandService } from "../shared/Services/hand.service";
import { LegService } from "../shared/Services/leg.service";
import { SexService } from "../shared/Services/sex.service";
import { Observable, combineLatest, map } from "rxjs";
import { IArm } from "../shared/models/arm.model";
import { IBreast } from "../shared/models/breast.model";
import { ICorps } from "../shared/models/corps.model";
import { IFinger } from "../shared/models/finger.model";
import { IFoot } from "../shared/models/foot.model";
import { IHand } from "../shared/models/hand.model";
import { ILeg } from "../shared/models/leg.model";
import { ISex } from "../shared/models/sex.model";
import { IHuman, IHumanHand } from "../shared/models/human.model";

@Component({
  selector: "app-exercice",
  templateUrl: "./exercice.component.html",
  styleUrls: ["./exercice.component.css"],
})
export class ExerciceComponent {
  // public arms$: Observable<IArm[]>;
  // public breasts$: Observable<IBreast[]>;
  // public corps$: Observable<ICorps[]>;
  // public foots$: Observable<IFoot[]>;
  public fingers$: Observable<IFinger[]>;
  public hands$: Observable<IHand[]>;
  // public legs$: Observable<ILeg[]>;
  // public sex$: Observable<ISex[]>;

  public handComposed$: Observable<IHumanHand[]>;

  constructor(
    private armService: ArmService,
    private breatsService: BreastService,
    private corpService: CorpService,
    private fingerService: FingerService,
    private footService: FootService,
    private handService: HandService,
    private legService: LegService,
    private sexService: SexService
  ) {
    // this.arms$ = this.armService.getArm();
    // this.breasts$ = this.breatsService.getBreast();
    // this.corps$ = this.corpService.getCorps();
    this.fingers$ = this.fingerService.getFingers();
    //this.foots$ = this.footService.getFoot();
    this.hands$ = this.handService.getHands();
    // this.legs$ = this.legService.getLegs();
    // this.sex$ = this.sexService.getSex();

    this.handComposed$ = combineLatest([this.hands$, this.fingers$]).pipe(
      map(([hands, fingers]: [IHand[], IFinger[]]) => {
        return hands.map((hand: IHand) => {
          return {
            id: hand.id,
            fingerNames: hand.idFingers.map((id: number) => {
              return fingers.find((finger: IFinger) => {
                return finger.id === id;
              })?.name;
            }),
          } as IHumanHand;
        });
      })
    );
  }

  /**
   * Enoncé assez simple mais résolution complexe
   * Nous avons l'interface nommé Human.model.ts qui doit être rempli, notre source de donnée, ICorps
   * Je souhaite que pour chaque ICorps, on obtienne un Human ^^
   * Aujourd'hui, tu seras notre Dr Frankenstein !!! Go créer des monstres
   */
}
