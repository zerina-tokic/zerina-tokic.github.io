import { LayoutProps } from "./layout/Layout";

const Container = ({ children }: LayoutProps) => {
  return <div className="max-w-[1175px] mx-auto px-3">{children}</div>;
};

export default Container;
