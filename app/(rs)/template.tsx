import { ReactNode } from "react";

const Template = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <div className="animate-appear">{children}</div>;
};

export default Template;
