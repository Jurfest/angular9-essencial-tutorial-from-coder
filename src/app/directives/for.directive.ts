import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{

  @Input('myForDe') items: string[];

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { 

  }

  ngOnInit():void {
    for(let item of this.items) {
      this.container.createEmbeddedView(this.template, { $implicit: item })
    }
  }

}
