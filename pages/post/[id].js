import {useRouter} from "next/router";
import MainLayout from "../../components/main-layout";

const Post = () => {
  const router = useRouter();
  const {id} = router.query;
  console.log(router);

  return (
    <MainLayout>
      <h1>Current post: {id}</h1>
    </MainLayout>
  );
};

export default Post;
