// import Link from "next/link";

// import { CreatePost } from "~/app/_components/create-post";
// import { getServerAuthSession } from "~/server/auth";

// export default async function Home() {
// 	const session = await getServerAuthSession();

// 	return <h1>Hello</h1>;
// }

// // async function CrudShowcase() {
// // 	const session = await getServerAuthSession();
// // 	if (!session?.user) return null;

// // 	const latestPost = await api.post.getLatest();

// // 	return (
// // 		<div className={styles.showcaseContainer}>
// // 			{latestPost ? (
// // 				<p className={styles.showcaseText}>
// // 					Your most recent post: {latestPost.name}
// // 				</p>
// // 			) : (
// // 				<p className={styles.showcaseText}>You have no posts yet.</p>
// // 			)}

// // 			<CreatePost />
// // 		</div>
// // 	);
// // }
