import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoEquipes } from './criacao-equipes';

describe('CriacaoEquipes', () => {
  let component: CriacaoEquipes;
  let fixture: ComponentFixture<CriacaoEquipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriacaoEquipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriacaoEquipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
