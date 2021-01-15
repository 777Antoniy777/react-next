import Link from "next/link";
import Head from "next/head";
import MainLayout from "../components/main-layout";

const App = () => {
  return (
    <MainLayout>
      <Head>
        <title>Main page | Next.js app</title>
      </Head>

      <h1>Привет Next.js</h1>

      <Link href="/about">About</Link>
      <br/>
      <Link href="/posts">Posts</Link>
    </MainLayout>
  );
};

export default App;
