import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickedPlayersComponent } from './picked-players.component';

describe('PickedPlayersComponent', () => {
  let component: PickedPlayersComponent;
  let fixture: ComponentFixture<PickedPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickedPlayersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickedPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
