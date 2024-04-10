import { type ReactNode } from "react";

import "~/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata = {
	title: "Organizo",
	description:
		"Organizo is a streamlined task management app designed to simplify your personal and professional life. With an intuitive interface and powerful features, it helps you manage tasks, projects, and deadlines with ease. Whether you're tracking daily to-dos or collaborating with a team, Organizo provides the tools you need to stay organized and focused. Boost your productivity and streamline your workflow with Organizo – your go-to app for seamless task management.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
			</head>
			<body className={inter.className}>
				<MantineProvider defaultColorScheme="dark">
					<TRPCReactProvider>
						<ClerkProvider>{children}</ClerkProvider>
					</TRPCReactProvider>
				</MantineProvider>
			</body>
		</html>
	);
}
