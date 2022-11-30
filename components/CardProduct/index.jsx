import Link from 'next/link';
import Image from 'next/image';

const CardProduct = (props) => {
	return (
		<div className="group w-full rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
			<Link href={`${props.link}`}>
				<div className="aspect-w-16 aspect-h-9">
					<Image
						src={props.image}
						alt={props.title}
						width={200}
						height={200}
						className="object-contain object-center transition-transform group-hover:scale-105"
					/>
				</div>
			</Link>
			<div className="mt-4 border-t px-5 pt-4 pb-2">
				<Link href={`${props.link}`}>
					<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
				</Link>
				<div className="mt-2.5 mb-5 flex items-center">
					<span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
						{props.rating.rate}
					</span>
				</div>
				<div className="flex items-center justify-between pb-4">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">${props.price}</span>
					<Link
						href={`${props.link}`}
						className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						View Detail
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CardProduct;
