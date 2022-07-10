import axios from 'axios';
import Head from 'next/head';
import Featured from '../component/Featured';
import ProducttList from '../component/ProducttList';
import styles from '../styles/Home.module.css';

export default function Home({ pizzaList }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Pizzetta</title>
				<meta name="description" content="Best Pizza shop in town" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Featured />
			<ProducttList pizzaList={pizzaList} />
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
