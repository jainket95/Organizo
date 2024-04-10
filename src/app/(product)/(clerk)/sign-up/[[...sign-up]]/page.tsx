// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import { Box, Button, Center, Text, Title } from "@mantine/core";
// import { IconBrandGoogle } from "@tabler/icons-react";
// import { signIn } from "next-auth/react";

// const SignOut = () => {
// 	const handleGoogleSign = async () => {
// 		const response = await signIn("google", {
// 			callbackUrl: "/protected",
// 		});

// 		console.log(response);
// 	};

// 	return (
// 		<Center w="100vw" h="100vh">
// 			<Box w="30rem" h="15rem" bg="gray" py="2rem" px="4rem">
// 				<Title fw="700" order={1} mb="3rem">
// 					Create a new account
// 					<Text size="lg">to continue to Organizo</Text>
// 				</Title>

// 				<Button
// 					variant="outline"
// 					color="yellow"
// 					size="lg"
// 					fullWidth
// 					leftSection={<IconBrandGoogle stroke={1.5} />}
// 					onClick={handleGoogleSign}>
// 					Continue to Google
// 				</Button>
// 			</Box>
// 		</Center>
// 	);
// };

// export default SignOut;

import { SignUp } from "@clerk/nextjs";

export default function Page() {
	return <SignUp />;
}
