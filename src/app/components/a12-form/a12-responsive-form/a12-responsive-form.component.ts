import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-a12-responsive-form',
    templateUrl: './a12-responsive-form.component.html',
    styleUrls: ['./a12-responsive-form.component.css']
})
export class A12ResponsiveFormComponent implements OnInit {

    // FormControl参数:
    // formState:初始化的值
    responsiveControl = new FormControl('初始化');

    // 表单组
    formGroup = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        address: new FormGroup({
            city: new FormControl(''),
            street: new FormControl(''),
            state: new FormControl('')
        })
    });

    formBuilderForm = this.formBuilder.group({
        inputOne: [''],
        inputTwo: [''],
        inputGroup: this.formBuilder.group({
            inputThree: [''],
            inputFour: ['']
        }),
    });

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
    }

    updateValue() {
        this.responsiveControl.setValue('修改的值');
    }

    onFormGroupSubmit() {
        console.warn('\nTODO: 将EventEmitter与表单值一起使用', this.formGroup.value);
    }

    onFormBuilderSubmit() {
        console.warn('\nTODO: 将EventEmitter与表单值一起使用', this.formBuilderForm.value);
    }

    patchValue() {
        this.formGroup.patchValue({
            firstName: 'Fidel Yiu',
            address: {
                street: '123 Drew Street'
            }
        });
    }

}
