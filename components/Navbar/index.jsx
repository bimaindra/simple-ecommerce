import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
	const router = useRouter();

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
		<header className="rounded border-gray-200 bg-white py-2.5 px-2 shadow-md dark:bg-gray-900 sm:px-4">
			<div className="container mx-auto flex flex-wrap items-center justify-between">
				<Link href="/" className="flex items-center">
					<img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6" alt="Flowbite Logo" />
					<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Opaku Store</span>
				</Link>
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
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
					<ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
						{linkItems.map((linkItem, index) => {
							return (
								<li key={index}>
									<Link
										href={linkItem.href}
										className={`${
											linkItem.active
												? 'block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700'
												: 'block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white'
										}`}>
										{linkItem.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
