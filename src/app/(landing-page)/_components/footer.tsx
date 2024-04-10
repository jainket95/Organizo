import { Affix, Button, Flex, Group, Paper, Text } from "@mantine/core";
import Link from "next/link";

import dayjs from "dayjs";

const Footer = () => {
	return (
		<Affix
			w="100%"
			position={{ bottom: "0", left: "0" }}
			bg="var(--mantine-color-body)">
			<Paper shadow="xl" radius="0">
				<Flex
					mih="2rem"
					p="1rem"
					justify="space-between"
					align="center"
					direction="row">
					<Text fw="600" size="md">
						&#169; {dayjs(new Date()).format("YYYY")} | All rights reserved
					</Text>
					<Group gap="xs" justify="flex-end">
						<Link href="/sign-up">
							<Button variant="transparent">Privacy Policy</Button>
						</Link>
						<Link href="/">
							<Button variant="transparent">Terms of service</Button>
						</Link>
					</Group>
				</Flex>
			</Paper>
		</Affix>
	);
};

export default Footer;
