import { Component, ComponentRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { CodeComponent } from './code/code.component';
import { SentenceComponent } from './sentence/sentence.component';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
@ViewChild('container',{read:ViewContainerRef,static:true}) container!:ViewContainerRef

Components = new Map<string, ComponentRef<any>>();
Index:number = 0
constructor(private App:AppService) {

  
}

  ngOnInit(): void {
    
  }
CreateComponent(type:any){
  const componenttype = this.GetComponentType(type)
  const component = this.container.createComponent(componenttype)
  component.instance.Data = "Hello this is mangal singh"
  component.instance.Index = this.Index.toString();
  this.Components.set(this.Index.toString(),component)
  component.instance.Closed.subscribe((res:any) => {
  this.DeleteComponent(res.Index)
  }) 
  this.Index++

}
DeleteComponent(Index:any){
if(this.Components.has(Index)){
  this.Components.get(Index)?.destroy();
  this.Components.delete(Index)
}
}
GetComponentType(name:any){
  let type:Type<any> = CodeComponent
  switch(name){
    case "Code":
      type = CodeComponent
      break;
    case "Sentence":
       
      type = SentenceComponent
      break;
  }
  return type
}
}
