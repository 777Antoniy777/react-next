import Router from "next/router";
import {NextPage} from "next";
import MainLayout from "../../components/main-layout";

interface Props {
  title: string;
}

const About: NextPage<Props> = ({title}) => {
  return (
    <MainLayout pageTitle='About page'>
      <h1>{title}</h1>

      <button type="button" onClick={() => Router.push('/')}>Go to main page</button>
    </MainLayout>
  );
};

About.getInitialProps = async () => {
  const response = await fetch(`${process.env.BASE_URL}/about`);
  const result: {title: string} = await response.json();

  return {
    title: result.title,
  };
};

export default About;
