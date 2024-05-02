# Phantasos

A private dream logger app written using [Next.js](https://nextjs.org/)

-   Strong data protection standards hence no use of cookies for storing dream data
-   Encrypted dreams
-   Simple and elegant UX

## Notes

There is JWT encryption of user interactions with dreams using Next-Auth, and additional AES encryption of user dream text which is also tied to the user's password

## Getting Started

First create a `.env.local` file of the format;

```env
MONGO_URL=mongodb+srv://georgejmx:somepassword@clusterXXXXXXXXX.mongodb.net/?retryWrites=true&w=majority
DB_NAME=phantasos
NEXTAUTH_SECRET=45somesecret1887ff03d48f801887ff
```

Run the development server:

```bash
npm install
npm prepare
npm run dev
```

Run tooling:

```bash
npm install
npm test
npm run lint
npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
