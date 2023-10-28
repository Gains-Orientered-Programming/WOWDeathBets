import * as Tabs from "@radix-ui/react-tabs";
import {
  ForwardRefExoticComponent,
  MouseEventHandler,
  ReactNode,
  RefAttributes,
} from "react";
interface DirtyTriggerProps
  extends ForwardRefExoticComponent<
    Tabs.TabsTriggerProps & RefAttributes<HTMLButtonElement>
  > {
  children: ReactNode;
  value: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string | undefined;
}

type TriggerProps = Omit<DirtyTriggerProps, "$$typeof">;

const TabTrigger = (props: TriggerProps) => {
  return (
    <Tabs.Trigger
      {...props}
      className={
        "border-b-2 border-b-transparent text-neutral-300 transition-all duration-150 data-[state=active]:border-brand-primary data-[state=active]:text-black hover:text-neutral-400 dark:text-neutral-400 data-[state=active]:dark:text-white dark:hover:text-neutral-300"
      }
    >
      {props.children}
    </Tabs.Trigger>
  );
};

export default TabTrigger;
