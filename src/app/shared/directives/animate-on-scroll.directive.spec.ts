import { ElementRef, Renderer2 } from '@angular/core';
import { AnimateOnScrollDirective } from './animate-on-scroll.directive';

describe('AnimateOnScrollDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: document.createElement('div') } as ElementRef;
    const mockRenderer = jasmine.createSpyObj('Renderer2', ['addClass']);
    const directive = new AnimateOnScrollDirective(mockElementRef, mockRenderer);
    expect(directive).toBeTruthy();
  });
});
