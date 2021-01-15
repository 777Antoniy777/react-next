const MainLayout = ({children}) => {
  return (
    <>
      <nav>
        <h2>Navigaion</h2>
      </nav>

      <main>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
