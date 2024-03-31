import { Flex, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";

const Logo = () => {
	return (
		<Link href="/">
			<Flex gap="md" justify="flex-start" align="center" direction="row">
				{/* <Image src="/logo.webp" alt="logo" width={80} height={80} /> */}
				<Title fw={700} tt="capitalize" order={1}>
					organizo
				</Title>
			</Flex>
		</Link>
	);
};

export default Logo;
