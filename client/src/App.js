import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import ProductList from './components/views/ProductList';
import ProductDetail from './components/views/ProductDetail';

const App = () => {
	/*
  return (
    <div className="App">
			<Form />
			<ProductList />
		</div>
  );
	*/
  return (
    <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={
						<>
							<Form />
							<ProductList />
						</>}
					/>
					<Route path="/:id" element={<ProductDetail />}/>
				</Routes>
			</BrowserRouter>
		</div>
  );
}

					//<Route path="/:id" element={<ProductDetail />} />
export default App;
