import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../pages/Login/Login';
import { BrowserRouter } from 'react-router-dom';

describe('Login component', () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);
	});

	it('Should render input for nickname', () => {
		const nicknameInput = screen.getByPlaceholderText('Enter nickname');
		expect(nicknameInput).toBeTruthy();
	});

	it('Should update nickname value on input change', () => {
		const nicknameInput = screen.getByPlaceholderText(
			'Enter nickname'
		) as HTMLInputElement;
		fireEvent.change(nicknameInput, { target: { value: 'John' } });
		expect(nicknameInput.value).toBe('John');
	});

	it('Should render "New game" radio button', () => {
		const newGameRadioButton = screen.getByLabelText('New game');
		expect(newGameRadioButton).toBeTruthy();
	});

	it('Should render "Connect by ID" radio button', () => {
		const connectByIdRadioButton = screen.getByLabelText('Connect by ID');
		expect(connectByIdRadioButton).toBeTruthy();
	});

	it('Should render input for game ID when "Connect by ID" radio button is selected', () => {
		const connectByIdRadioButton = screen.getByLabelText('Connect by ID');
		fireEvent.click(connectByIdRadioButton);

		const gameIdInput = screen.getByPlaceholderText('Enter game ID to connect');
		expect(gameIdInput).toBeTruthy();
	});

	// it('Should navigate to new game on form submit with no game ID', () => {
	// 	const nicknameInput = screen.getByPlaceholderText(
	// 		'Enter nickname'
	// 	) as HTMLInputElement;
	// 	fireEvent.change(nicknameInput, { target: { value: 'John' } });
	// 	expect(nicknameInput.value).toBe('John');
	// });

	// it('Should navigate to game ID route on form submit with game ID', () => {
	// 	const nicknameInput = screen.getByPlaceholderText('Enter nickname');
	// 	fireEvent.change(nicknameInput, { target: { value: 'John' } });

	// 	const connectByIdRadioButton = screen.getByLabelText('Connect by ID');
	// 	fireEvent.click(connectByIdRadioButton);

	// 	const gameIdInput = screen.getByPlaceholderText('Enter game ID to connect');
	// 	fireEvent.change(gameIdInput, { target: { value: '12345' } });

	// 	const submitButton = screen.getByText('Connect');
	// 	fireEvent.click(submitButton);
	// });
});
