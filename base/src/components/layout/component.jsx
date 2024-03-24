import { Header } from '../header/component'
import { Footer } from '../footer/component'

export const Layout = ({ children }) => {
	return (
		<>
			<Header />
				<main>{children}</main>
			<Footer />
		</>
	);
};