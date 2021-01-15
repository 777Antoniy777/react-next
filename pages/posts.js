import Head from "next/head";
import MainLayout from "../components/main-layout";

const Posts = () => {
  return (
    <MainLayout>
      <Head>
        <title>Posts page | Next.js app</title>
      </Head>

      <h1>Posts page</h1>
      <p>All posts here</p>
    </MainLayout>
  );
};

export default Posts;
