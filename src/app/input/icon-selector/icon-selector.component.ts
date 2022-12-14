import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-icon-selector',
  templateUrl: './icon-selector.component.html',
  styleUrls: ['./icon-selector.component.scss'],
})
export class IconSelectorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() name: string = '';
  @Input() value: string = '';
  @Input() icon: string = '';
  @Input() inlineStyle: string = '';
  @Input() iconFormControl?: FormControl;
}
