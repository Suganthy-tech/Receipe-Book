import { Directive, OnInit, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';
@Directive({
    selector: '[appdropdown]'
})
export class appDropdownDirective implements OnInit {
    dropdown = true;
    constructor(private ele: ElementRef, private render: Renderer2) { }
    ngOnInit() {
        console.log(this.ele);
    }
    @HostListener('click') onclickdropdown() {

        if (this.dropdown) {

            const pop = this.ele.nativeElement.lastChild;
            this.render.addClass(pop, 'show');
            this.dropdown = !this.dropdown;
        } else {
            const pop = this.ele.nativeElement.lastChild;
            this.render.removeClass(pop, 'show');
            this.dropdown = !this.dropdown;

        }


    }
}