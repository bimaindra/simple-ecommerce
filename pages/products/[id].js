import Script from 'next/script';
import Image from 'next/image';

export const getStaticPaths = async () => {
	const res = await fetch(`https://fakestoreapi.com/products`);
	const data = await res.json();

	const paths = data.map((product) => {
		return {
			params: { id: product.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;

	const res = await fetch(`https://fakestoreapi.com/products/${id}`);
	const data = await res.json();

	return {
		props: { product: data },
	};
};

const Detail = ({ product }) => {
	const handleAddToCart = () => {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			"event": `"add_to_cart"`,
			"product_name": `"${product.title}"`,
			"product_category": `"${product.category}"`,
			"product_price": `"${product.price}"`,
		});
	};

	return (
		<>
			<Script>{`window.dataLayer = window.dataLayer || []; window.dataLayer.push({ "event": "view_product", "product_name": "${product.title}", "product_category": "${product.category}", "product_price": "${product.price}",});`}</Script>
			<section className="u-safe-area">
				<div className="container">
					<div className="prose mx-auto">
						<h1>{product.title}</h1>
						<div className="relative py-6">
							<div className="aspect-w-16 aspect-h-9">
								<Image
									src={product.image}
									alt={product.title}
									width={500}
									height={500}
									className="m-0 object-contain object-center"
								/>
							</div>
						</div>
						<div className="flex items-center justify-between gap-4 border-t border-b py-4">
							<span className="font-bold">
								Price <br /> <span className="text-2xl">${product.price}</span>
							</span>
							<span className="font-bold">
								Rating <br /> {product.rating.rate} of 5
							</span>
							<span className="font-bold">
								Category <br />
								<span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
									{product.category}
								</span>
							</span>
						</div>
						<p>{product.description}</p>
						<div className="flex justify-end">
							<button
								type="button"
								className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								onClick={() => handleAddToCart()}>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Detail;
