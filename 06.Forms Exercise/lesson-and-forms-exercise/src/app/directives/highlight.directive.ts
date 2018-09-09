
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective {
    constructor(private el: ElementRef) {
        this.el.nativeElement.style.background = 'yellow';
    }

    private highlight(color: string) {
        this.el.nativeElement.style.background = color;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('red');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('green');
    }
}
