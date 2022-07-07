import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
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

export const getServerSideProps = async () => {
	const res = await axios.get('http://localhost:3000/api/products');
	return {
		props: {
			pizzaList: res.data
		}
	};
};
