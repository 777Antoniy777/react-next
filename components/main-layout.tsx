import Head from "next/head";
import Link from "next/link";

const MainLayout = ({children, pageTitle = 'Next.js app'}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <nav>
        <Link href="/">Main</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
      </nav>

      <main>
        {children}
      </main>

      {/* DetailedHTMLProps<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement> */}
      <style jsx global>{`
        nav {
          display: flex;
          justify-content: space-around;
          padding: 10px;
          color: white;
          background-color: lightblue;
        }

        nav a {
          padding-right: 20px;
          color: white;
        }

        main {
          padding-top: 20px;
        }
      `}</style>
    </>
  );
};

export default MainLayout;
