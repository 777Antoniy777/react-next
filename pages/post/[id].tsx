import Link from "next/link";
import {useRouter} from "next/router";
import {useState, useEffect} from "react";
import {NextPage, NextPageContext} from "next";
import {PostProps} from "../../interfaces/posts";
import MainLayout from "../../components/main-layout";

interface Props {
  post: PostProps;
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  };
}

const Post: NextPage<Props> = ({post: serverPost}) => {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    const loadPost = async () => {
      const response = await fetch(`${process.env.BASE_URL}/posts/${router.query.id}`);
      const result = await response.json();

      setPost(result);
    };

    if (!serverPost) {
      loadPost();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1>{post.title}</h1>
      <hr/>
      <p>{post.body}</p>

      <Link href="/posts">Back to posts</Link>

      <style>{`
        a {
          color: green;
        }
      `}</style>
    </MainLayout>
  );
};

Post.getInitialProps = async (ctx: PostNextPageContext) => {
  const {query, req} = ctx;

  if (!req) {
    return {
      post: null,
    };
  }

  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const result: PostProps = await response.json();

  return {
    post: result,
  };
};

export default Post;
