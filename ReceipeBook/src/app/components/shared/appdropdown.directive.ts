import { Directive, OnInit, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';
@Directive({
    selector: '[appdropdown]'
})
export class appDropdownDirective implements OnInit {
    @HostBinding('class.open') isOpen = false;
    dropdown = true;
    constructor(private ele: ElementRef, private render: Renderer2) { }
    ngOnInit() {
        console.log(this.ele);
    }
    /* the below code is for opening a drop down by clicking on it and closing again by clicking on it*/

    // @HostListener('click') onclickdropdown() {

    //     if (this.dropdown) {

    //         const pop = this.ele.nativeElement.lastChild;
    //         this.render.addClass(pop, 'show');
    //         this.dropdown = !this.dropdown;
    //     } else {
    //         const pop = this.ele.nativeElement.lastChild;
    //         this.render.removeClass(pop, 'show');
    //         this.dropdown = !this.dropdown;
    //     }
    // }

    /* the below code is for opening a drop down by clicking on it and closing again by clicking outside of it*/
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        console.log(this.ele.nativeElement);
        console.log(event);
        if (this.ele.nativeElement.contains(event.target)) {

            const pop = this.ele.nativeElement.lastChild;
            this.render.addClass(pop, 'show');
            //this.dropdown = !this.dropdown;
        } else {
            const pop = this.ele.nativeElement.lastChild;
            this.render.removeClass(pop, 'show');
            //this.dropdown = false;

        }
    }
}