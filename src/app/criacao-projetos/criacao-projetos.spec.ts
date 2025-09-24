import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoProjetos } from './criacao-projetos';

describe('CriacaoProjetos', () => {
  let component: CriacaoProjetos;
  let fixture: ComponentFixture<CriacaoProjetos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriacaoProjetos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriacaoProjetos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
