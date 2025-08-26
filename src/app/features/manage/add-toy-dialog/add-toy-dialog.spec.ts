import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToyDialog } from './add-toy-dialog';

describe('AddToyDialog', () => {
  let component: AddToyDialog;
  let fixture: ComponentFixture<AddToyDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToyDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToyDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
