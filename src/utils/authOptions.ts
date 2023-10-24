import { AuthOptions } from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";



export const authOptions: AuthOptions = {
  providers: [
    FacebookProvider({
      clientId: "",
      clientSecret: ""
    }),
    GoogleProvider({
      clientId: "",
      clientSecret: ""
    }),
    // GitHubProvider({
    //     clientId: process.env.GITHUB_ID ?? "",
    //     clientSecret: process.env.GITHUB_SECRET ?? ""
    // }),
  ],
}