import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="rounded-lg border-t bg-white p-4 shadow md:px-6 md:py-8">
			<div className="sm:flex sm:items-center sm:justify-between">
				<Link href="/" className="mb-4 flex items-center sm:mb-0">
					<img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6" alt="Opaku Store Logo" />
					<span className="self-center whitespace-nowrap text-base font-semibold">Opaku Store</span>
				</Link>
				<ul className="mb-6 flex flex-wrap items-center text-sm text-gray-500 sm:mb-0">
					<li>
						<Link href="/about" className="mr-4 hover:underline md:mr-6 ">
							About
						</Link>
					</li>
					<li>
						<Link href="/privacy-policy" className="mr-4 hover:underline md:mr-6">
							Privacy Policy
						</Link>
					</li>
					<li>
						<Link href="/contact" className="hover:underline">
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
			<span className="block text-sm text-gray-500 sm:text-center">
				© 2022{' '}
				<Link href="#" className="hover:underline">
					Opaku Store
				</Link>
				. All Rights Reserved.
			</span>
		</footer>
	);
};

export default Footer;
