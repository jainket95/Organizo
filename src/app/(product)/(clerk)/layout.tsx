import { Container, Flex } from "@mantine/core";
import { type ReactNode } from "react";

type AuthLayoutProps = {
	children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
	const containerProps = {
		h: "100vh",
		fluid: true,
		w: "100vw",
	};
	return (
		<Container {...containerProps}>
			<Flex w="100%" h="100%" justify="center" align="center">
				{children}
			</Flex>
		</Container>
	);
};

export default AuthLayout;
