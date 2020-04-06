import { TestBed, async,ComponentFixture, } from '@angular/core/testing';
import{Component,DebugElement,NO_ERRORS_SCHEMA, Directive, Input, TestabilityRegistry} from '@angular/core'
import{RouterTestingModule} from '@angular/router/testing'
import { AppComponent } from './app.component';
import { Router,RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';

//Custome Components
@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent { }

@Component({selector: 'home', template: ''})
class HomeStubComponent {}


//Custom Directive 
@Directive({
  selector:'[routerLink]',
  host:{'(click)':'onClick()'}

})
export class RouterLinkDirectiveStub{
  @Input('routerLink') linkParams :any

  navigatedTo:any=null
  onClick(){
      this.navigatedTo=this.linkParams
  }

}


describe('AppComponent', () => {
  let router:Router
  let component:AppComponent
  let routerLinks:RouterLinkDirectiveStub[]
  let linkDes:DebugElement[]

 // let location :Location
  let fixture:ComponentFixture<AppComponent>
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [
        AppComponent,
        RouterLinkDirectiveStub,
        RouterOutletStubComponent,
        HomeStubComponent
      ],
     
    }).compileComponents().then(()=>{
      fixture=TestBed.createComponent(AppComponent)
      component=fixture.componentInstance
    });

    router=TestBed.get(Router)
 
    
  }));
  beforeEach(()=>{
    fixture.detectChanges() //trigger initial data binding
    //find DebugElements with an attached RouterLinkStubDirective

    linkDes=fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub))
    routerLinks=linkDes.map(de=>de.injector.get(RouterLinkDirectiveStub))
  })
  it('should instantiate the AppComponent',()=>{
    expect (component).not.toBeNull()
  })

it('should get correct routerLinks from template',()=>{
  console.log('Router Links array :' +routerLinks[0].linkParams)
  console.log('Router Links array :' +routerLinks[1].linkParams)
  console.log('Router Links array :' +routerLinks[2].linkParams)
 
 expect(routerLinks[0].linkParams).toBe('/home')
 expect(routerLinks[1].linkParams).toBe('/products')
 

})



  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  xit(`should have as title 'my-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('my-app');
  });

  xit('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-app!');
  });
  it('should contain correct number of views',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let dEs = fixture.debugElement.queryAll(By.css('ul li'))
  // console.log(dEs)
    expect(dEs.length).toBe(3)
  })
 

})
