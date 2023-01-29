import axios from 'axios';
import {useState} from 'react';

const Form = props => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	
	const submitForm = (e) => {
		e.preventDefault();

		console.log(title,price,description);
		axios.post('http://localhost:8000/api/products/new',
							 {title, price, description})
				 .then(res => {
					 setTitle("");
					 setPrice("");
					 setDescription("");
					 console.log(res);
				 })
				 .catch(err => console.log(err));
	}

	return (
		<form onSubmit={submitForm}>
			<h1>Product Manager</h1>
			<div>
				<label>Titulo</label>
				<input type="text" name="title"
							 value={title} onChange={e => setTitle(e.target.value)} />
			</div>
			<div>
				<label>Precio</label>
				<input type="number" name="price"
							 value={price} onChange={e => setPrice(e.target.value)} />
			</div>
			<div>
				<label>Descripcion</label>
				<input type="text" name="description"
							 value={description} onChange={e => setDescription(e.target.value)} />
			</div>
			<input type="submit" value="Guardar"/>
		</form>
	);
}

export default Form;

