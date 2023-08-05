import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "62830888335-lj6pudf0jpj4us2en9e080ch84m46h75.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    GithubProvider({
      clientId: "eff93604d5c94b7e2590",
      clientSecret: "a0b5e51d415b8469e47c18c1bba2ebb5f9876365",
    }),
    FacebookProvider({
      clientId: "638586751571937",
      clientSecret: "acc7f3972f1134c843655559860c5e09",
    }),
    // ...add more providers here
  ],
});
