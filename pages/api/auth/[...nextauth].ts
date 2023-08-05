import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"


export default NextAuth ({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "62830888335-lj6pudf0jpj4us2en9e080ch84m46h75.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
});