import { OrganizationList } from "@clerk/nextjs";

const CreateOrganisationPage = () => {
	return (
		<OrganizationList
			hidePersonal
			afterSelectOrganizationUrl="/organisation/:id"
			afterCreateOrganizationUrl="/organisation/:id"
		/>
	);
};

export default CreateOrganisationPage;
