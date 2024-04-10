import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
	publicRoutes: ["/"],
	async afterAuth(auth, req) {
		if (auth.userId && auth.isPublicRoute) {
			let path = "/select-organisation";

			if (auth.orgId) {
				path = `/organisation/${auth.orgId}`;
			}

			const orgSelection = new URL(path, req.url);
			return NextResponse.redirect(orgSelection);
		}

		if (!auth.userId && !auth.isPublicRoute) {
			await redirectToSignIn({ returnBackUrl: req.url });
		}

		if (
			auth.userId &&
			!auth.orgId &&
			req.nextUrl.pathname === "/select-organisation"
		) {
			const orgSelection = new URL("/select-organisation", req.nextUrl);
			return NextResponse.redirect(orgSelection);
		}
	},
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
