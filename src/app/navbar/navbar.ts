import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar implements AfterViewInit {
  @ViewChild('circle') circleRef!: ElementRef<HTMLElement>;
  @ViewChild('slider') sliderRef!: ElementRef<HTMLElement>;
  @ViewChild('list') listRef!: ElementRef<HTMLElement>;
  @ViewChild('prev') prevRef!: ElementRef<HTMLButtonElement>;
  @ViewChild('next') nextRef!: ElementRef<HTMLButtonElement>;

  active = 1;
  leftTransform = 0;
  width_item = 0;
  count = 0;
  items: HTMLElement[] = [];

  ngAfterViewInit(): void {
    const circle = this.circleRef?.nativeElement;
    const slider = this.sliderRef?.nativeElement;
    const list = this.listRef?.nativeElement;
    const prev = this.prevRef?.nativeElement;
    const next = this.nextRef?.nativeElement;
    this.items = Array.from(list.querySelectorAll('.item')) as HTMLElement[];
    this.count = this.items.length;
    this.width_item = this.items[this.active]?.offsetWidth || 0;

    next.onclick = () => {
      this.active = this.active >= this.count - 1 ? this.count - 1 : this.active + 1;
      this.runCarousel(list, prev, next);
    };
    prev.onclick = () => {
      this.active = this.active <= 0 ? this.active : this.active - 1;
      this.runCarousel(list, prev, next);
    };
    this.runCarousel(list, prev, next);

    // Set Text on a Circle
    if (circle) {
      const textCircle = circle.innerText.split('');
      circle.innerText = '';
      textCircle.forEach((value, key) => {
        const newSpan = document.createElement('span');
        newSpan.innerText = value;
        const rotateThisSpan = (360 / textCircle.length) * (key + 1);
        newSpan.style.setProperty('--rotate', rotateThisSpan + 'deg');
        circle.appendChild(newSpan);
      });
    }
  }

  private runCarousel(list: HTMLElement, prev: HTMLElement, next: HTMLElement) {
    prev.style.display = this.active == 0 ? 'none' : 'block';
    next.style.display = this.active == this.count - 1 ? 'none' : 'block';
    const old_active = list.querySelector('.item.active');
    if (old_active) old_active.classList.remove('active');
    this.items[this.active].classList.add('active');
    this.leftTransform = this.width_item * (this.active - 1) * -1;
    list.style.transform = `translateX(${this.leftTransform}px)`;
  }
}
