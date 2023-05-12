import {
    AfterViewInit,
    Component,
    ElementRef,
    OnChanges,
    OnDestroy,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CustomReactComponent } from './CustomReactComponent';


const containerElementName = 'customReactComponentContainer';

@Component({
    selector: 'app-my-component',
    template: `<span #${containerElementName}></span>`,
    // styleUrls: [''],
    encapsulation: ViewEncapsulation.None,
})
export class CustomReactComponentWrapperComponent implements OnChanges, OnDestroy, AfterViewInit {
    @ViewChild(containerElementName, { static: true }) containerRef!: ElementRef;

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        this.render();
    }

    ngAfterViewInit() {
        this.render();
    }

    ngOnDestroy() {
        ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
    }

    private render() {

        ReactDOM.render(
            <React.StrictMode>
                <div>
                    <CustomReactComponent />
                </div>
            </React.StrictMode>
            , this.containerRef.nativeElement);
    }
}
