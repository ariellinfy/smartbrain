// import { db } from "@vercel/postgres";

// const client = await db.connect();

// async function createVerificationTokens() {
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS verification_token (
//         identifier TEXT NOT NULL,
//         expires TIMESTAMPTZ NOT NULL,
//         token TEXT NOT NULL,

//         PRIMARY KEY (identifier, token)
//     );
//   `;
// }

// async function createAccounts() {
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS accounts (
//         id SERIAL,
//         "userId" INTEGER NOT NULL,
//         type VARCHAR(255) NOT NULL,
//         provider VARCHAR(255) NOT NULL,
//         "providerAccountId" VARCHAR(255) NOT NULL,
//         refresh_token TEXT,
//         access_token TEXT,
//         expires_at BIGINT,
//         id_token TEXT,
//         scope TEXT,
//         session_state TEXT,
//         token_type TEXT,

//         PRIMARY KEY (id)
//     );
//   `;
// }

// async function createSessions() {
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS sessions (
//         id SERIAL,
//         "userId" INTEGER NOT NULL,
//         expires TIMESTAMPTZ NOT NULL,
//         "sessionToken" VARCHAR(255) NOT NULL,

//         PRIMARY KEY (id)
//     );
//   `;
// }

// async function createUsers() {
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS users (
//         id SERIAL,
//         name VARCHAR(255),
//         email VARCHAR(255) UNIQUE NOT NULL,
//         "emailVerified" TIMESTAMPTZ,
//         image TEXT,
//         hash TEXT,
//         entries INTEGER DEFAULT 0,
//         joined TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

//         PRIMARY KEY (id)
//     );
//   `;
// }

// export async function GET() {
//   try {
//     await client.sql`BEGIN`;
//     await createVerificationTokens();
//     await createAccounts();
//     await createSessions();
//     await createUsers();
//     await client.sql`COMMIT`;

//     return Response.json({ message: "Database created successfully" });
//   } catch (error) {
//     await client.sql`ROLLBACK`;
//     return Response.json({ error }, { status: 500 });
//   }
// }
