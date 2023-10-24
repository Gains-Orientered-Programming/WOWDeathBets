import * as Tabs from "@radix-ui/react-tabs";
import { ReactNode } from "react";

const TabPanel = ({
  children,
  value,
}: {
  children: ReactNode;
  value: string;
}) => {
  return (
    <>
      <Tabs.Content tabIndex={-1} value={value}>
        {children}
      </Tabs.Content>
    </>
  );
};

export default TabPanel;
