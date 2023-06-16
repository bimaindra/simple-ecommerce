import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/feature/cart/cartSlice';

const CardProduct = (props) => {
	const { id, link, image, title, price, rating = false } = props;

	const dispatch = useDispatch();

	const handleAddToCart = (product) => {
		dispatch(addProduct(product));
	};

	return (
		<div className="group flex w-full flex-col justify-between rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
			<Link href={`${link}`} className="overflow-hidden p-6">
				<div className="aspect-h-9 aspect-w-16">
					<Image
						src={image}
						alt={title}
						width={200}
						height={200}
						priority={true}
						className="h-full w-full object-contain object-center transition-transform group-hover:scale-105"
					/>
				</div>
			</Link>
			<div className="flex flex-col gap-6 border-t p-6">
				<Link href={`${link}`}>
					<h5 className="text-xl font-semibold tracking-tight text-gray-900 line-clamp-3">{title}</h5>
				</Link>
				<div className="flex justify-between">
					<div>
						<p className="font-medium">Rating:</p>
						<span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
							{rating.rate}
						</span>
					</div>
					<div>
						<p className="text-right font-medium">Price:</p>
						<span className="text-lg font-bold text-gray-900">${price}</span>
					</div>
				</div>
				<div className="flex items-center justify-between gap-3">
					<Link
						href={`${link}`}
						className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
						View Detail
					</Link>
					<button
						className="rounded-lg bg-emerald-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
						onClick={() => handleAddToCart(props)}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardProduct;
