import { type ReactNode } from "react";
import DashboardHeader from "./_components/DashboardHeader";

type DashboardLayoutProps = {
	children: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	return (
		<div>
			<DashboardHeader />
			{children}
		</div>
	);
};

export default DashboardLayout;
