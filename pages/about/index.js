import Router from "next/router";
import MainLayout from "../../components/main-layout";

const About = ({title}) => {
  return (
    <MainLayout pageTitle='About page'>
      <h1>{title}</h1>

      <button type="button" onClick={() => Router.push('/')}>Go to main page</button>
    </MainLayout>
  );
};

About.getInitialProps = async (ctx) => {
  const response = await fetch(`http://localhost:4200/about`);
  const result = await response.json();

  return {
    title: result.title,
  };
};

export default About;
