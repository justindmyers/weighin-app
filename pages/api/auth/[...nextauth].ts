import NextAuth, { NextAuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

export default NextAuth({
	providers: [
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID!,
			clientSecret: process.env.DISCORD_CLIENT_SECRET!,
		}),
	],
	theme: {
		colorScheme: 'light',
	},
	pages: {
		signIn: '/auth/sign-in/sign-in',
	},
	callbacks: {
		async jwt({ token }) {
			token.userRole = 'admin';
			return token;
		},
		async session({ session, token, user }) {
			session.accessToken = token.accessToken as string;
			return session;
		},
	},
});
