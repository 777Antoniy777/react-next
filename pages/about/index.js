import Router from "next/router";
import MainLayout from "../../components/main-layout";

const About = () => {
  console.log(Router);

  return (
    <MainLayout>
      <h1>About page</h1>

      <button type="button" onClick={() => Router.push('/')}>Go to main page</button>
    </MainLayout>
  );
};

export default About;
