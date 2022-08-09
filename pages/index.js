import axios from 'axios';
import Head from 'next/head';
import Featured from '../component/Featured';
import ProducttList from '../component/ProducttList';
import styles from '../styles/Home.module.css';
import { useRef } from 'react';

export default function Home({ pizzaList }) {
	const productRef = useRef();
	return (
		<div className={styles.container}>
			<Head>
				<title>Pizzetta</title>
				<meta name="description" content="Best Pizza shop in town" />
			</Head>
			<Featured />
			<ProducttList ref={productRef} id="product" pizzaList={pizzaList} />
		</div>
	);
}

export async function getProducts() {
	const response = await axios.get(`http://localhost:3000/api/products`);
	return response;
}
export async function getServerSideProps(context) {
	const res = await getProducts();
	return {
		props: {
			pizzaList: res.data
		}
	};
}
