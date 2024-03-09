import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit{

  @Input() Index:any;
  @Input() Data:any = ``;
  @Output() Closed = new EventEmitter<any>();
  
  Represent:any = "Mangal"
  ngOnInit(): void {
    this.addText();
  }
  addText() {
    const chars = this.Data.split('');
    for (let i = 0; i < chars.length+1; i++) {
      setTimeout(() => {
        this.Represent = chars.slice(0, i).join('');
      }, i * 50);
    }
  }
  Close(){
    this.Closed.emit({Index:this.Index})
  }
}
