import { ReactNode } from "react";

export const TabTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className={"mt-7 mb-5"}>
      <h1 className={"text-xl"}>{children}</h1>
    </div>
  );
};

export const TabCard = ({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) => {
  return (
    <div className={"text-md flex flex-col gap-4 font-semibold"}>
      {title && <TabCardTitle>{title}</TabCardTitle>}
      <div className={"flex flex-col gap-x-2 font-normal"}>{children}</div>
    </div>
  );
};

const TabCardTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-md mb-2 font-semibold">{children}</h3>;
};
const TabCardRow = ({ title, value }: { title?: string; value: ReactNode }) => {
  return (
    <span
      className={
        "flex justify-between py-1.5 px-1 text-sm font-semibold text-neutral-700 even:bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-300 dark:even:bg-neutral-800 dark:even:bg-opacity-60"
      }
    >
      {title && <p>{title}: &nbsp;</p>}
      <span className={"font-normal text-neutral-700 dark:text-neutral-300"}>
        {value}
      </span>
    </span>
  );
};

TabCard.Title = TabCardTitle;
TabCard.Row = TabCardRow;
