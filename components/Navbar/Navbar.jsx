import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const Navbar = () => {
	const router = useRouter();
	const cartItem = useSelector((state) => state.cart.length);
	const linkItems = [
		{
			name: 'Home',
			href: '/',
			active: router.pathname === '/',
		},
		{
			name: 'Products',
			href: '/products',
			active: router.pathname === '/products',
		},
		{
			name: 'About',
			href: '/about',
			active: router.pathname === '/about',
		},
		{
			name: 'Contact',
			href: '/contact',
			active: router.pathname === '/contact',
		},
	];

	return (
		<header className="fixed top-0 z-50 w-full rounded border-gray-200 bg-white px-2 py-2.5 shadow-md sm:px-4">
			<div className="container mx-auto flex flex-wrap items-center justify-between">
				<Link href="/" className="flex items-center">
					<img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6" alt="Flowbite Logo" />
					<span className="self-center whitespace-nowrap text-xl font-semibold">Opaku Store</span>
				</Link>
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
					aria-controls="navbar-default"
					aria-expanded="false">
					<span className="sr-only">Open main menu</span>
					<svg
						className="h-6 w-6"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clipRule="evenodd"></path>
					</svg>
				</button>
				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="mt-4 flex flex-col items-center rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
						{linkItems.map((linkItem, index) => {
							return (
								<li key={index}>
									<Link
										href={linkItem.href}
										className={`${
											linkItem.active
												? 'block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700'
												: 'block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700'
										}`}>
										{linkItem.name}
									</Link>
								</li>
							);
						})}
						<Link href={`/cart`}>
							<button
								type="button"
								className="d relative inline-flex items-center rounded-lg bg-blue-700 p-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
								<svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
									<path d="M.5 1a.5.5 0 000 1h1.11l.401 1.607 1.498 7.985A.5.5 0 004 12h1a2 2 0 100 4 2 2 0 000-4h7a2 2 0 100 4 2 2 0 000-4h1a.5.5 0 00.491-.408l1.5-8A.5.5 0 0014.5 3H2.89l-.405-1.621A.5.5 0 002 1H.5zM6 14a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm-1.646-7.646l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L8 8.293l2.646-2.647a.5.5 0 01.708.708z" />
								</svg>
								<span className="sr-only">Cart</span>
								<div className="absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white">
									{cartItem}
								</div>
							</button>
						</Link>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
