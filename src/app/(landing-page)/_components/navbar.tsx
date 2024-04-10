import Link from "next/link";
import ThemeModeButton from "~/components/theme-mode-button/theme-mode-button";
import { Affix, Button, Flex, Group, Paper } from "@mantine/core";
import Logo from "~/components/logo";
import { IconLogin } from "@tabler/icons-react";

const Navbar = () => {
	return (
		<Affix
			w="100%"
			position={{ top: "0", left: "0" }}
			bg="var(--mantine-color-body)">
			<Paper shadow="xl" radius="0">
				<Flex
					mih="2rem"
					p="2rem"
					gap="md"
					justify="space-between"
					align="center"
					direction="row">
					<Logo />
					<Group justify="flex-end">
						<ThemeModeButton />
						<Link href="/sign-in">
							<Button
								variant="transparent"
								color="yellow"
								size="md"
								rightSection={<IconLogin stroke={1} />}>
								Login
							</Button>
						</Link>
						<Link href="/sign-up">
							<Button variant="outline" color="yellow" size="md">
								Get Organizo for free
							</Button>
						</Link>
					</Group>
				</Flex>
			</Paper>
		</Affix>
	);
};

export default Navbar;
