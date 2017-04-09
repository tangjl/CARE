import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  form: FormGroup;
  inList = "";
  exList = "";
  inArray = Array<string>();
  exArray = Array<string>();

  constructor(private fb: FormBuilder) { 
    this.form = fb.group({
      'inclusion': [null, Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ])],
      'exclusion': [null, Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ])]
    })
  }

  ngOnInit() {
  }

  clear() {
    this.inList = "";
    this.exList = "";
  }

  submit(value: any) {
    this.inList = this.inList + value.inclusion;
    this.exList = this.exList + value.exclusion;
  }
}
