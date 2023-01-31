import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import ProductDetail from './components/views/ProductDetail';

const App = () => {
  return (
    <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element=<Main /> />
					<Route path="/:id" element=<ProductDetail /> />
				</Routes>
			</BrowserRouter>
		</div>
  );
}

export default App;
