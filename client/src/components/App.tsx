import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from '../pages/Game/Game';
import Login from '../pages/Login/Login';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/game">
					<Route path=":gameId" element={<Game />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
