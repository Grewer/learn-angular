import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TODOListComponent } from 'src/app/todolist/todolist.component';

describe('TODOListComponent', () => {
  let component: TODOListComponent;
  let fixture: ComponentFixture<TODOListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TODOListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TODOListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
