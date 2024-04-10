import { Container } from "@mantine/core";
import { type ReactNode } from "react";
// import { AuthProvider } from "./provider";
// import { ClerkProvider } from "@clerk/nextjs";

type ProductLayoutProps = {
	children: ReactNode;
};

const ProductLayout = ({ children }: ProductLayoutProps) => {
	const containerProps = {
		h: "100vh",
		fluid: true,
		w: "100vw",
	};
	return (
		// <AuthProvider>
		// <ClerkProvider>
		<Container {...containerProps}>{children}</Container>
		// </ClerkProvider>
		// </AuthProvider>
	);
};

export default ProductLayout;
