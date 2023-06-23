import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationModalComponent } from './authentication-modal.component';

describe('AuthenticationModalComponent', () => {
	let component: AuthenticationModalComponent;
	let fixture: ComponentFixture<AuthenticationModalComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [AuthenticationModalComponent]
		});
		fixture = TestBed.createComponent(AuthenticationModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});