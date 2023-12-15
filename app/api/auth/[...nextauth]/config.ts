import { NextAuthOptions } from "next-auth";
import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

import clientPromise from "@/lib/setupMongo";
import { User } from "@/lib/types";

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "email and password",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "george@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      // @ts-ignore Broken next-auth typing
      async authorize(credentials, _: unknown) {
        const client = await clientPromise;
        const users = client.db(process.env.DB_NAME).collection("users");
        const user: User = (await users.findOne({
          email: credentials?.email.toLowerCase(),
        })) as unknown as User;
        if (!user) {
          throw Error("User does not exist");
        }

        const isValid = await compare(credentials!.password, user.hash);
        if (!isValid) {
          throw Error("Invalid password");
        }
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};
