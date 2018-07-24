import { Component, OnInit } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'app-slider',
    templateUrl: './image-slider.component.html',
    animations: [
        trigger('slideState', [
            state('0',
                style({
                    'transform-origin': 'center',
                    transform: 'translateX(+800px)',
                    opacity: 0
                })
            ),
            state('1',
                style({
                    'transform-origin': 'center',
                    transform: 'translateX(-800px)',
                    opacity: 0
                })
            ),
            state('2',
                style({
                    transform: 'none',
                    opacity: 1
                })

            ),
            state('3',
                style({
                    transform: 'translateX(+800px)',
                    opacity: 0
                })
            ),
            state('4',
                style({
                    transform: 'translateX(-800px)',
                    opacity: 0
                })
            ),
            transition('* => *', animate('800ms ease-in-out'))
        ]),
        trigger('cover', [
            state('0',
                style({
                    'transform-origin': 'center',
                    transform: 'translateX(+800px)',
                    opacity: 0
                })
            ),
            state('1',
                style({
                    'transform-origin': 'center',
                    transform: 'translateX(-800px)',
                    opacity: 0
                })
            ),
            state('2',
                style({
                    transform: 'none',
                    opacity: 1
                })

            ),
            state('3',
                style({
                    transform: 'translateX(+800px)',
                    opacity: 0
                })
            ),
            state('4',
                style({
                    transform: 'translateX(-800px)',
                    opacity: 0
                })
            ),
            transition('* => *', animate('500ms ease-in-out'))
        ])
    ]
})
export class ImageSliderComponent implements OnInit {
    private className: string;
    public state: number;

    constructor() {
        this.state = 5;
    }
    ngOnInit() {

    }
    public slideLeft() {
        this.state = 1;
        setTimeout(() => {
            this.state = 3;
            setTimeout(() => {
                this.state = 2;
                /**reset new picture*/
            }, 800);
            console.log('reset new pic');
        }, 800);
    }
    public slideRight() {
        this.state = 0;
        setTimeout(() => {
            this.state = 4;
            setTimeout(() => {
                this.state = 2;
                /**reset new picture*/
            }, 800);
            console.log('reset new pic');
        }, 800);
    }
}
