import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})

export class SentenceComponent implements OnInit{
  @Input() Index:any;
  @Input() Data:any = ``;
  @Output() Closed = new EventEmitter<any>();
  Represent:any = "Mangal"
  /**
   *
   */
  constructor(private App:AppService) {

    
  }
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