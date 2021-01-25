import Link from "next/link";
import {useState, useEffect} from "react";
import {NextPage, NextPageContext} from "next";
import {PostProps} from "../interfaces/posts";
import MainLayout from "../components/main-layout";

interface Props {
  posts: PostProps[];
}

const Posts: NextPage<Props> = ({posts: serverPosts}) => {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    const loadPosts = async () => {
      const response = await fetch(`${process.env.BASE_URL}/posts`);
      const result = await response.json();

      setPosts(result);
    };

    if (!serverPosts) {
      loadPosts();
    }
  }, []);

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout pageTitle='Posts page'>
      <h1>Posts page</h1>

      <p>All posts here</p>

      <ul>
        { posts.map(elem => (
          <li key={elem.id}>
            <Link href={`/post/[id]`} as={`/post/${elem.id}`}>{elem.title}</Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

Posts.getInitialProps = async (ctx: NextPageContext) => {
  const {req} = ctx;

  if (!req) {
    return {
      posts: null,
    };
  }

  const response = await fetch("http://localhost:4200/posts");
  const result: PostProps[] = await response.json();

  return {
    posts: result,
  }
};

export default Posts;
