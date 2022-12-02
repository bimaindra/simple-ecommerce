import CardProduct from '../../components/CardProduct';

export async function getStaticProps() {
	const res = await fetch(`https://fakestoreapi.com/products?sort=desc`);
	const products = await res.json();

	return {
		props: {
			products,
		},
	};
}

const Products = ({ products }) => {
	return (
		<section className="u-safe-area !pt-0">
			<div className="container">
				<div className="prose mt-6 mb-10">
					<h1 className="text-2xl md:text-3xl lg:text-4xl">Our Product</h1>
				</div>
				<div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
					{products.map((item) => {
						return (
							<CardProduct
								key={item.id}
								title={item.title}
								image={item.image}
								rating={item.rating}
								price={item.price}
								link={`/products/${item.id}`}
							/>
						);
					})}
				</div>
				{/*<div className="mt-12 flex justify-center">
					<button
						type="button"
						className="mr-2 mb-2 rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Show More
					</button>
				</div>*/}
			</div>
		</section>
	);
};

export default Products;
