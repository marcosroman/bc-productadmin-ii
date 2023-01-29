import {useParams} from 'react-router';
import {useState,useEffect} from 'react';
import axios from 'axios';

const ProductDetail = props => {
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');

	const {id} = useParams();

	useEffect(() => {
		console.log('fetch',"http://localhost:8000/api/products/"+id);
		axios.get("http://localhost:8000/api/products/"+id)
		     .then(res => {
					 setTitle(res.data.product.title);
					 setPrice(res.data.product.price);
					 setDescription(res.data.product.description);
				 });
	},[]);

	return (
		<>
			<p>ok {id}</p>
			<p>Title: {title}</p>
			<p>Price: {price}</p>
			<p>Description: {description}</p>
		</>
	);
}

export default ProductDetail;

