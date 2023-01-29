import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList = props => {
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:8000/api/products")
				 .then(res => {
					 console.log(res.data.product);
					 setProductList(res.data.product)})
	},[]);

	return (
		<>
			<h2>Products</h2>
			<ul>
				{productList.map((item,index) =>
					<li key={index}>
						<Link to={item._id}>{item.title}</Link>
					</li>)}
			</ul>
		</>
	);
}

export default ProductList;
