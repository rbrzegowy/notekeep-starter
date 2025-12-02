import { Directive, ElementRef, EmbeddedViewRef, EventEmitter, HostBinding, HostListener, Input, Output, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[appTimeoutSpinner]',
  standalone: true
})
export class TimeoutSpinnerDirective {
  @HostBinding('style.display') styles = 'block'
  private timeout = 4000
  private onTimeout!: Function
  private onTimeoutParams: any[] = []

  @Input()
  public set appTimeoutSpinner(value: { timeout?: number, onTimeout?: Function, onTimeoutParams?: any[] }) {
    if (value.timeout) { this.timeout = value.timeout }
    if (value.onTimeout) this.onTimeout = value.onTimeout
    if (value.onTimeoutParams) this.onTimeoutParams = value.onTimeoutParams
  }

  private spinner!: HTMLDivElement
  private animation!: Animation
  private view!: EmbeddedViewRef<Element>

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<Element>,
    private readonly renderer: Renderer2,
  ) {

  }
  ngOnInit(): void {
    this.addSpinnerToHost()
    this.listenToHostEvents()
    this.animate()
  }
  private addSpinnerToHost() {
    this.view = this.viewContainerRef.createEmbeddedView(this.templateRef)
    this.spinner = this.renderer.createElement('div')
    this.spinner.setAttribute('style', 'height: 2px; width: 100%; background: #fff')
    this.view.rootNodes[0].appendChild(this.spinner)
  }

  listenToHostEvents() {
    this.view.rootNodes[0].addEventListener('mouseover', () => this.animation.pause())
    this.view.rootNodes[0].addEventListener('mouseout', () => this.animation.play())
  }

  private animate() {
    const keyframes = [
      { transform: "scaleX(1)" },
      { transform: "scaleX(0)" },
    ]
    this.animation = this.spinner.animate(keyframes, { duration: this.timeout, fill: 'forwards' })
    this.animation.finished.then(() => this.onTimeout?.(...this.onTimeoutParams))
  }


}
