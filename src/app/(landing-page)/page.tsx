import { Button, Center, Flex, Text, Title } from "@mantine/core";
import { IconMedal2 } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
	return (
		<Flex
			gap="2rem"
			justify="flex-start"
			align="center"
			direction="column"
			py="8rem">
			<Center w="28rem" h="5rem" p="2rem">
				<IconMedal2 stroke={2} size="3rem" />
				<Text size="lg" fw="700" tt="uppercase" ml="1rem">
					Awarded Best Organizing Suite
				</Text>
			</Center>

			<Title fw={700} order={1} fz="3rem" mb="1rem">
				Streamline Your Tasks and Boost Productivity with
				<Text c="yellow" fz="3.8rem" fw={700} ta="center" fs="italic" lts="2px">
					Organizo
				</Text>
			</Title>

			<Text w="60%" fz="lg" ta="center">
				Organizo is a sleek and intuitive task management app designed to bring
				order and clarity to your personal and professional life. With its
				user-friendly interface and powerful organizational features, Organizo
				helps you effortlessly manage your tasks, projects, and deadlines.
			</Text>
			<Text w="60%" fz="lg" ta="center">
				Whether you&apos;re planning a complex project, tracking your daily
				to-dos, or collaborating with a team, Organizo provides the tools you
				need to drag-and-drop functionality, customizable boards, and real-time
				stay organized and focused.
			</Text>
			<Text w="60%" fz="lg" ta="center" mb="2rem">
				Experience seamless task management with collaboration. Unlock your
				productivity potential and streamline your workflow with Organizo – your
				ultimate companion for staying organized and achieving your goals.
			</Text>

			<Link href="/">
				<Button variant="outline" color="yellow" size="lg">
					Get Organizo for free
				</Button>
			</Link>
		</Flex>
	);
};

export default LandingPage;
