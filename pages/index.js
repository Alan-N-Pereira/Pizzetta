import axios from 'axios';
import Head from 'next/head';
import Featured from '../component/Featured';
import ProducttList from '../component/ProducttList';
import styles from '../styles/Home.module.css';
import { useRef, useState} from 'react';
import Add from '../component/Add';
import AddButton from '../component/AddButton';

export default function Home({ pizzaList, admin }) {
	const productRef = useRef();
	const [close, setClose] = useState(true)
	return (
		<div className={styles.container}>
			<Head>
				<title>Pizzetta</title>
				<meta name="description" content="Best Pizza shop in town" />
			</Head>
			<Featured />
			{admin && <AddButton setClose={setClose}/> }
			<ProducttList ref={productRef} id="product" pizzaList={pizzaList} />
			{!close && <Add setClose={setClose}/>}
		</div>
	);
}

export async function getProducts() {
	const response = await axios.get(`http://localhost:3000/api/products`);
	return response;
}
export async function getServerSideProps(ctx) {
	const myCookie = ctx.req?.cookies || '';
	let admin = false

	if(myCookie.token === process.env.TOKEN){
		admin = true
	}
	const res = await getProducts();
	return {
		props: {
			pizzaList: res.data,
			admin
		}
	};
}
