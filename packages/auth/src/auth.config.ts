import { NextAuthConfig } from "next-auth";

export default {
  session: { strategy: "jwt" },
  providers: [
    {
      id: "iam.inuk.blog", // signIn("my-provider") and will be part of the callback URL
      name: "Local idP", // optional, used on the default login page as the button text.
      type: "oidc", // "oidc" or "oauth" for OAuth 2 providers
      issuer: process.env.AUTH_ISSUER, // to infer the .well-known/openid-configuration URL
      clientId: process.env.AUTH_CLIENT_ID, // from the provider's dashboard
      clientSecret: process.env.AUTH_CLIENT_SECRET, // from the provider's dashboard
      checks: ["state", "pkce", "nonce"],
    },
  ],
} satisfies NextAuthConfig;
