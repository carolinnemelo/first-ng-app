import { Directive, input, effect, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false);
  element = inject(ElementRef);

  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      this.element.nativeElement.style.textDecoration = 'line-through';
      this.element.nativeElement.style.color = '#6c757d';
      this.element.nativeElement.style.backgroundColor = '#d3f9d8';
    } else {
      this.element.nativeElement.style.textDecoration = 'none';
      this.element.nativeElement.style.color = '#000';
      this.element.nativeElement.style.backgroundColor = '#fff';
    }
  });
}
