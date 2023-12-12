"use client";

import { Cross1Icon } from "@radix-ui/react-icons";
import { Combobox, Transition, Menu } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import React, { Fragment } from "react";
import { useRouter } from "next/navigation";

const realmMap = new Map<string, string[]>([
  ["eu", ["nekrosh", "stitches"]],
  ["us", ["defias pillager", "skull rock"]],
]);

const Searchbar = () => {
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState<UnifiedOption>();
  const [region, setRegion] = React.useState("eu");
  const [realm, setRealm] = React.useState("nekrosh");
  const [characters, setCharacters] = React.useState<UnifiedOption[]>([]);
  const router = useRouter();

  React.useEffect(() => {
    if ("characters" in localStorage) {
      const items: UnifiedOption[] = JSON.parse(
        localStorage.getItem("characters") ?? ""
      );
      setCharacters(items);
    }
  }, []);

  const handleLink = (state: UnifiedOption) => {
    if (state == null) return;
    state.link && router.push(state.link);
    setSelected(state);
    setSearch("");

    // Handle localStorage
    const history = [];
    const localHistory = localStorage.getItem("characters");
    history.push(...JSON.parse(localHistory ?? "[]"));
    history.push({ ...state });
    if (history.length > 5) while (history.length > 5) history.shift();
    localStorage.setItem("characters", JSON.stringify(history));
  };

  const filteredCharacterHistory = !search
    ? characters
    : characters?.filter((s) =>
        s.characterName.toLowerCase().startsWith(search.toLowerCase())
      );

  return (
    <div className="px-3 w-full max-w-4xl">
      <div className={"relative bg-neutral-800 rounded w-80"}>
        <Combobox value={selected} onChange={handleLink} nullable as={"div"}>
          <div className="flex flex-row justify-center items-center">
            <div className="flex justify-center items-center w-16 border-r border-neutral-700">
              <RegionMenu region={region} setRegion={setRegion} />
            </div>
            <div className="px-2 border-r flex border-neutral-700">
              <RealmMenu region={region} realm={realm} setRealm={setRealm} />
            </div>
            <Combobox.Input
              as={Fragment}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              displayValue={(e) => search}
            >
              <input
                placeholder="Search for Character"
                autoComplete="off"
                className="rounded-md outline-none bg-neutral-800 w-full h-9 text-white indent-2 text-sm"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </Combobox.Input>
            {search && (
              <button
                className="flex justify-center mr-4 items-center"
                onClick={() => setSearch("")}
              >
                <Cross1Icon className="w-2 h-2" />
              </button>
            )}
          </div>
          <Transition
            show={search.length > 0}
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="transform -translate-y-6 opacity-0"
            enterTo="transform opacity-y-0 opacity-100"
            leave="transition ease-in duration-100"
            leaveFrom="transform opacity-100 -translate-y-0 scale-100"
            leaveTo="transform opacity-0 -translate-y-6 scale-95"
          >
            <Combobox.Options
              className={
                "absolute max-h-96 w-full overflow-auto rounded-b-xl bg-neutral-800 border-t border-black"
              }
              static
            >
              {filteredCharacterHistory.length === 0 ? (
                <>
                  <div className="bg-neutral-800 py-2">
                    <p className="ml-5 text-zinc-400 font-bold">Character</p>
                  </div>
                  <UnifiedOption
                    key={search}
                    characterName={search}
                    link={`/characters/${region}/${realm}/${search}`}
                    region={region}
                    realm={realm}
                  />
                </>
              ) : (
                <>
                  <div className="bg-neutral-800 py-2">
                    <p className="ml-5 text-zinc-400 font-bold">
                      Recent Searches
                    </p>
                  </div>
                  {filteredCharacterHistory.map((c, index) => (
                    <UnifiedOption
                      key={index}
                      characterName={c.characterName}
                      image={c.image}
                      region={c.region}
                      realm={c.realm}
                      link={`characters/${c.region}/${c.realm}/${c.characterName}`}
                    />
                  ))}
                </>
              )}
            </Combobox.Options>
          </Transition>
        </Combobox>
      </div>
    </div>
  );
};

const RegionMenu = ({
  region,
  setRegion,
}: {
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className={"flex h-full items-center z-10"}>
      <Menu as={"div"} className={"w-full inline-block"}>
        <Menu.Button>{region}</Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform -translate-x-6 opacity-0"
          enterTo="transform opacity-x-0 opacity-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={"absolute left-0 bg-neutral-800 mt-6 rounded w-64"}
          >
            <div className={"p-3"}>
              <MenuItem>
                <button
                  onClick={() => setRegion("us")}
                  className={
                    "w-full h-full flex items-center justify-between p-4"
                  }
                >
                  <p>North America</p>
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  onClick={() => setRegion("eu")}
                  className={
                    "w-full h-full flex items-center justify-between p-4"
                  }
                >
                  <p>Europa</p>
                </button>
              </MenuItem>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

const RealmMenu = ({
  realm,
  region,
  setRealm,
}: {
  realm: string;
  region: string;
  setRealm: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className={"flex h-full items-center z-10"}>
      <Menu as={"div"} className={"w-full inline-block"}>
        <Menu.Button>{realm}</Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform -translate-x-6 opacity-0"
          enterTo="transform opacity-x-0 opacity-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={"absolute left-0 bg-neutral-800 mt-6 rounded w-64"}
          >
            <div className={"p-3"}>
              {realmMap.get(region)?.map((r) => (
                <MenuItem key={r}>
                  <button
                    onClick={() => setRealm(r)}
                    className={
                      "w-full h-full flex items-center justify-between p-4"
                    }
                  >
                    <p>{r}</p>
                  </button>
                </MenuItem>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

const MenuItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <Menu.Item as={Fragment}>
      {({ active }) => (
        <div
          className={`w-full h-8 flex justify-start text-sm font-bold rounded-md ${
            active && "bg-neutral-700"
          }`}
        >
          {children}
        </div>
      )}
    </Menu.Item>
  );
};

interface UnifiedOption {
  image?: string;
  region: string;
  realm: string;
  characterName: string;
  link: string;
}

const UnifiedOption = (props: UnifiedOption) => {
  const { image, region, realm, characterName, link } = props;

  return (
    <Combobox.Option value={props}>
      {({ active, selected }) => (
        <Link href={link} passHref>
          <div
            className={`cursor-pointer ${
              active ? "bg-neutral-700" : "bg-neutral-800"
            }`}
          >
            <div className={"flex w-full flex-row p-2 pl-4"}>
              <div className="relative w-6 h-6">
                {image && (
                  <Image
                    priority
                    src={image}
                    alt={`${characterName} splash art`}
                    sizes={"100vw"}
                    fill
                  />
                )}
              </div>
              <div className="ml-2 w-fit">
                <p className={"text-gray-200 text-lg"}>{characterName}</p>
              </div>
              {realm && (
                <div className={"flex items-center ml-2 w-16"}>
                  <p className={"text-gray-500 text-sm"}>{realm}</p>
                </div>
              )}
              {region && (
                <div className={"flex ml-auto items-center pr-4"}>
                  <div
                    className={`${
                      region == "NA" ? "bg-blue-400" : "bg-yellow-200"
                    } flex rounded-2xl`}
                  >
                    <p className={"text-white text-sm px-2"}>{region}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Link>
      )}
    </Combobox.Option>
  );
};

export default Searchbar;
