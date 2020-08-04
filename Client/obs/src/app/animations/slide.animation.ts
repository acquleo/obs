import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
 } from '@angular/animations';


    export const slideInAnimation =

    trigger('slideInAnimation', [

        transition( '* => *', [

            query(':enter', 
                [
                    style({ transform: 'translateX(-100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))
                ], 
                { optional: true }
            ),

            query(':leave', 
                [
                    style({ transform: 'translateX(-100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))
                ], 
                { optional: true }
            ),

            query(':enter', 
                [
                    style({ transform: 'translateX(-100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))
                ], 
                { optional: true }
            )

        ])

    ]);

    