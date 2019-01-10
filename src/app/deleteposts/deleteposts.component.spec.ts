import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepostsComponent } from './deleteposts.component';

describe('DeletepostsComponent', () => {
  let component: DeletepostsComponent;
  let fixture: ComponentFixture<DeletepostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletepostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletepostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
