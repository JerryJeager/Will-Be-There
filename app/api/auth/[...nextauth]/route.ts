import { mockAuthOptions, authOptions } from "../../../../src/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(process.env.NODE_ENV === 'production' ? authOptions : mockAuthOptions);
export { handler as GET, handler as POST };