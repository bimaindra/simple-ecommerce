import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../../store/feature/cart/cartSlice';
import Link from 'next/link';

const Cart = () => {
	const cartItems = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const handleRemoveFromCart = (id) => {
		dispatch(removeProduct(id));
	};

	return (
		<section>
			<div className="mx-auto max-w-4xl">
				<div className="prose mx-auto mb-10 max-w-none">
					<h1 className="text-2xl md:text-3xl lg:text-4xl">Cart</h1>
				</div>
				<div className="mx-auto my-6 w-full rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8">
					<div className="mb-4 flex items-center justify-between">
						<h5 className="text-xl font-bold leading-none text-gray-900 underline dark:text-white">Your Cart Items</h5>
					</div>
					<div className="flow-root">
						<ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
							{cartItems.length ? (
								cartItems.map((item) => (
									<li className="py-3 sm:py-4" key={item.id}>
										<div className="flex items-center gap-x-4">
											<div className="flex-shrink-0">
												<Image
													className="h-full w-full rounded-md object-cover"
													width={64}
													height={64}
													src={item.image}
													alt={item.title}
												/>
											</div>
											<div className="min-w-0 flex-1">
												<p className="mb-1 font-bold text-gray-900 line-clamp-2 dark:text-white lg:line-clamp-1">
													{item.title}
												</p>
												<p className="truncate font-medium text-gray-500 dark:text-gray-400">${item.price}</p>
											</div>
											<div className="w-16 text-center">
												<p className="mb-1">
													<b>Item</b>
												</p>
												<span>1</span>
											</div>
											<button
												className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
												onClick={() => handleRemoveFromCart(item.id)}>
												Remove
											</button>
										</div>
									</li>
								))
							) : (
								<div className="text-center">
									<p className="mb-6">You haven't add anyting to the cart. </p>
									<Link
										className="inline-block rounded-lg bg-sky-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
										href={`/`}>
										Back to shop
									</Link>
								</div>
							)}
						</ul>
					</div>
				</div>
				<div className="mx-auto my-6 w-full rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8">
					<div className="mb-4 flex items-center justify-between">
						<h5 className="text-xl font-bold leading-none text-gray-900 underline dark:text-white">Summary</h5>
					</div>
					<div className="mt-6 flex justify-between">
						<p className="font-semibold">Total Payment:</p>
						<p className="text-2xl">
							<b>$ 200</b>
						</p>
					</div>
					<div className="mt-6 flex justify-end gap-4">
						<Link
							className="inline-block rounded-lg bg-sky-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
							href={`/`}>
							Back to shop
						</Link>
						<Link
							className="inline-block rounded-lg bg-emerald-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
							href={`/`}>
							Proceed to checkout
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cart;
