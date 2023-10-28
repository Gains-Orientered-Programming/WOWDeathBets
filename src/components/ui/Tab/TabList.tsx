import * as Tabs from "@radix-ui/react-tabs";
import { ReactNode } from "react";

const TabList = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Tabs.List className={"flex flex-row gap-10"}>{children}</Tabs.List>
    </>
  );
};

export default TabList;
