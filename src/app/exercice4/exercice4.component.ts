import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice4",
  templateUrl: "./exercice4.component.html",
  styleUrls: ["./exercice4.component.css"],
})
export class Exercice4Component implements OnInit {
  constructor() {}

  public texts: Array<string> = ["Un", "Deux", "Trois"];

  ngOnInit(): void {}
}
