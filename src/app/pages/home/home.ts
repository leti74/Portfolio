import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Me } from '../../components/me/me';
import { Qualita } from '../../components/qualita/qualita';
import { Abilita } from '../../components/abilita/abilita';
import { Progetti } from '../../components/progetti/progetti';
import { Futuro } from '../../components/futuro/futuro';
import { Contatti } from '../../components/contatti/contatti';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Navbar, Me, Qualita, Abilita,Progetti, Futuro, Contatti, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
