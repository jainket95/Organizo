import { OrganizationSwitcher, auth } from "@clerk/nextjs";
import { useComputedColorScheme } from "@mantine/core";
import { dark, neobrutalism } from "@clerk/themes";

const OrganisationIdPage = () => {
	// const computedColorScheme = useComputedColorScheme("light", {
	// 	getInitialValueInEffect: true,
	// });

	// const { userId, orgId } = auth();
	return (
		<div>
			{/* <OrganizationSwitcher hidePersonal appearance={{ baseTheme: dark }} /> */}
			OrganisationIdPage
		</div>
	);
};

export default OrganisationIdPage;
