"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";

interface DirtyTabProps
  extends ForwardRefExoticComponent<
    Tabs.TabsProps & RefAttributes<HTMLDivElement>
  > {
  children?: ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
  dir?: "ltr" | "rtl" | undefined;
  activationMoode?: "auto" | "manual";
}

type TabProps = Omit<DirtyTabProps, "$$typeof">;

const Tab = (props: TabProps) => {
  return (
    <Tabs.Root typeof="" {...props}>
      {props.children}
    </Tabs.Root>
  );
};

export default Tab;
