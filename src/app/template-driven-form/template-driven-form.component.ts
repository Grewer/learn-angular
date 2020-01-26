import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/template-driven-form/hero';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.less']
})
export class TemplateDrivenFormComponent implements OnInit {


  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

}
