import ThemeModeButton from "~/components/theme-mode-button/theme-mode-button";
import { Affix, Button, Flex, Group, Paper } from "@mantine/core";
import Logo from "~/components/logo";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { IconPlus } from "@tabler/icons-react";

// type DashboardHeaderProps = {};

const DashboardHeader = () => {
	return (
		<Affix
			w="100%"
			position={{ top: "0", left: "0" }}
			bg="var(--mantine-color-body)">
			<Paper shadow="xl" radius="0">
				<Flex
					mih="2rem"
					p="1rem"
					gap="md"
					justify="space-between"
					align="center"
					direction="row">
					<Group justify="flex-start" gap="xl">
						<Logo />
						<Button
							variant="outline"
							color="yellow"
							size="sm"
							rightSection={<IconPlus stroke={2} size="1.3rem" />}>
							Login
						</Button>
					</Group>
					<Group visibleFrom="md" justify="flex-end" gap="xl">
						<ThemeModeButton />
						<OrganizationSwitcher
							appearance={{
								baseTheme: dark,
								elements: {
									rootBox: {
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									},
								},
							}}
							afterCreateOrganizationUrl="/organisation/:id"
							afterSelectOrganizationUrl="/organisation/:id"
							afterLeaveOrganizationUrl="/select-organization"
						/>
						<UserButton
							afterSignOutUrl="/"
							appearance={{
								elements: {
									avatarBox: {
										height: 30,
										width: 30,
									},
								},
							}}
						/>
					</Group>
				</Flex>
			</Paper>
		</Affix>
	);
};

export default DashboardHeader;
