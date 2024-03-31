import { Container } from "@mantine/core";
import { type ReactNode } from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

type LandingPageLayoutProps = {
	children: ReactNode;
};

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
	const containerProps = {
		h: "100vh",
		fluid: true,
		w: "100vw",
	};
	return (
		<Container {...containerProps}>
			<Navbar />
			{children}
			<Footer />
		</Container>
	);
};

export default LandingPageLayout;
