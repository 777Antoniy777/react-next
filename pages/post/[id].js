import {useRouter} from "next/router";

const Post = () => {
  const router = useRouter();
  const {id} = router.query;
  console.log(router);

  return (
    <>
      <h1>Current post: {id}</h1>
    </>
  );
};

export default Post;
