import Link from "next/link";
import {useRouter} from "next/router";
import {useState, useEffect} from "react";
import MainLayout from "../../components/main-layout";

const Post = ({post: serverPost}) => {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    const loadPost = async () => {
      const response = await fetch(`http://localhost:4200/posts/${router.query.id}`);
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

Post.getInitialProps = async (ctx) => {
  const {query, req} = ctx;

  if (!req) {
    return {
      post: null,
    };
  }

  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const result = await response.json();

  return {
    post: result,
  };
};

export default Post;
