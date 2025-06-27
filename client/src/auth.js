import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Ensure you have a .env.local file at the root of your project
// with the following variables:
//
// AUTH_GOOGLE_ID=your_google_client_id
// AUTH_GOOGLE_SECRET=your_google_client_secret
//
// You can get these from the Google Cloud Console.

if (!process.env.AUTH_GOOGLE_ID || !process.env.AUTH_GOOGLE_SECRET) {
  console.warn(
    "⚠️ Google OAuth credentials are not set. Please create a .env.local file with AUTH_GOOGLE_ID and AUTH_GOOGLE_SECRET."
  );
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  // providers: [Google],
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt : "select_account",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        token.idToken = account.id_token;
        token.picture = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.image = token.picture;
      }
      session.idToken = token.idToken;
      return session;
    },
  },
});
