import Header from "../header/Header";
import Footer from "../footer/Footer";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col bg-[#FAFAFA] ">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
