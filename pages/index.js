import { useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './../store/feature/product/productSlice';
import CardProduct from '../components/CardProduct';

//export async function getStaticProps() {
//	//const res = await fetch('https://fakestoreapi.com/products?sort=desc&limit=6');
//	//const products = await res.json();
//	//return {
//	//	props: {
//	//		products,
//	//	},
//	//};
//	const products = await useSelector((state) => state.product);
//	const dispatch = useDispatch();
//	dispatch(fetchProducts());

//	return {
//		props: {
//			products,
//		},
//	};
//}

export default function Home() {
	const res = useSelector((state) => state.product);
	const { products } = res;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	return (
		<section className="u-safe-area !pt-0">
			<div className="container">
				<div className="prose mb-10">
					<h1 className="text-2xl md:text-3xl lg:text-4xl">Latest Collection</h1>
				</div>
				<div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
					{products.map((item) => {
						return (
							<CardProduct
								key={item.id}
								id={item.id}
								title={item.title}
								image={item.image}
								rating={item.rating}
								price={item.price}
								link={`/products/${item.id}`}
							/>
						);
					})}
				</div>
				<div className="mt-12 flex justify-center">
					<Link
						href="/products"
						className="mr-2 mb-2 rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						View More Products
					</Link>
				</div>
			</div>
		</section>
	);
}
