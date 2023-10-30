"use client";

import TabList from "src/components/ui/Tab/TabList";
import Tab from "src/components/ui/Tab/Tab";
import { useSearchParams, useRouter } from "next/navigation";
import TabTrigger from "src/components/ui/Tab/TabTrigger";
import TabPanel from "src/components/ui/Tab/TabPanel";
import { TabData } from "./type";

export const TabElement = ({
  params,
  categories,
}: {
  params: { region: string; realm: string; characterName: string };
  categories: TabData[];
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentTab = searchParams.get("tab");

  return (
    <>
      <div className="w-full flex items-center">
        <div className="w-full">
          <Tab
            value={currentTab ?? categories[0]?.param}
            defaultValue={"character-panel"}
            onValueChange={(e) => e}
          >
            <div className="flex w-full items-center">
              <div className="w-full">
                <TabList>
                  {categories.map((category) => (
                    <TabTrigger
                      onClick={() =>
                        router.push(
                          `/characters/${params.region}/${params.realm}/${params.characterName}` +
                            `?tab=${category.param}`
                        )
                      }
                      key={category.param}
                      value={category.param}
                    >
                      {category.name}
                    </TabTrigger>
                  ))}
                </TabList>
              </div>
              <div className=" w-auto mb-2">
                <button className="bg-zinc-950 w-28 h-10 rounded-sm text-zinc-400 hover:text-white">
                  Make bet
                </button>
              </div>
            </div>
            <hr className="border border-neutral-300" />
            <div className="mt-5 flex justify-center w-full">
              {categories.map((category) => (
                <TabPanel key={category.param} value={category.param}>
                  {category.content}
                </TabPanel>
              ))}
            </div>
          </Tab>
        </div>
      </div>
    </>
  );
};
