import { auth } from "@/auth";

/**
 * Retrieves the current user from the authentication session.
 *
 * @return {Promise<User | undefined>} The current user if available, otherwise undefined.
 */
export const currentUser = async () => {
	const session = await auth();

	return session?.user;
};
