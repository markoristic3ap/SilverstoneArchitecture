import {Component, forwardRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


@Component({
    selector: 'test-component',
    templateUrl: './test.component.html',
    styleUrls: [
        'test.component.scss'
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(()=>TestComponent),
            multi: true
        }
    ]
})
export class TestComponent implements OnInit, ControlValueAccessor {

    private _value;
    private isDisabled;

    @ViewChild("control") myControl;

    constructor( private renderer: Renderer2 ) {
    }

    ngOnInit() {
    }

    public onKey(value: string) {
        this.value = value;
    }



    onChange: any = () => {};
    onTouched: any = () => {};

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this.onChange(val);
        this.onTouched();
    }

    registerOnChange(fn) {
        this.onChange = fn;
    }

    writeValue(value) {
        this.value = value;
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        const div = this.myControl.nativeElement;
        const action = isDisabled?"addClass":"removeClass";
        this.renderer[action](div, "disabled");
        this.isDisabled = isDisabled;
    }

}
