import { LayoutProps } from "./layout/Layout";

const Container = ({ children }: LayoutProps) => {
  return <div className="container mx-auto px-3">{children}</div>;
};

export default Container;
