import {
  Combobox as ComboboxElement,
  Menu,
  Transition,
} from "@headlessui/react";
import React from "react";
import Link from "next/link";
import { ControllerRenderProps } from "react-hook-form";

interface UnifiedOption {
  characterName: string;
  realm: string;
  region?: string;
}

interface FormSlectProps extends ControllerRenderProps {
  history: {
    characterName: string;
    realm: string;
    region?: string;
  }[];
}

export const Combobox = React.forwardRef<HTMLInputElement, FormSlectProps>(
  ({ name, onChange, disabled, value, history }, ref) => {
    const [recentSearchesOpen, setRecentSearchesOpen] = React.useState(false);

    const getNameFromValue = (value: string | number) => {
      const option = history.find((option) => option.characterName === value);
      return option ? option.characterName : "";
    };

    return (
      <ComboboxElement
        value={value}
        onChange={(value) => onChange({ target: { name, value } })}
        nullable
        as={"div"}
      >
        <ComboboxElement.Input
          as={React.Fragment}
          displayValue={(optionValue: string | number) =>
            getNameFromValue(optionValue)
          }
        >
          <input
            placeholder="Search Characters"
            onClick={() => setRecentSearchesOpen(true)}
            autoComplete="off"
            className="rounded-md outline-none bg-neutral-800 h-9 text-white indent-2 text-sm"
            onChange={onChange}
            value={value}
            onBlur={() => setRecentSearchesOpen(false)}
          />
        </ComboboxElement.Input>
        {!recentSearchesOpen || history.length <= 0 ? null : (
          <Transition
            show={recentSearchesOpen}
            as={React.Fragment}
            enter="transition ease-out duration-300"
            enterFrom="transform -translate-y-6 opacity-0"
            enterTo="transform opacity-y-0 opacity-100"
            leave="transition ease-in duration-100"
            leaveFrom="transform opacity-100 -translate-y-0 scale-100"
            leaveTo="transform opacity-0 -translate-y-6 scale-95"
          >
            <ComboboxElement.Options
              className={
                "absolute max-h-96 w-full overflow-auto rounded-b-xl bg-neutral-800 border-t border-black"
              }
              static
            >
              <div onMouseDown={(e) => e.preventDefault()}>
                <div className={"bg-neutral-800 py-2"}>
                  <p className={"ml-5 text-zinc-400 font-bold"}>
                    Recent Searches
                  </p>
                </div>
                {history?.map((s, index) => (
                  <UnifiedOption
                    key={index}
                    characterName={s.characterName}
                    region={s.region}
                    realm={s.realm}
                  />
                ))}
              </div>
            </ComboboxElement.Options>
          </Transition>
        )}
      </ComboboxElement>
    );
  }
);

const UnifiedOption = (props: UnifiedOption) => {
  const { characterName, realm, region } = props;

  return (
    <ComboboxElement.Option value={props}>
      {({ active, selected }) => (
        <Link href={`/characters/${region}/${realm}/${characterName}`} passHref>
          <div className={"cursor-pointer bg-neutral-800 hover:bg-zinc-600"}>
            <div className="flex w-full flex-row items-center gap-2 p-2 pl-4">
              <div>
                <p className="text-zin-400 text-lg">{characterName}</p>
              </div>
              <div>
                <p className="text-gray-500 text-md">
                  {region}-{realm}
                </p>
              </div>
            </div>
          </div>
        </Link>
      )}
    </ComboboxElement.Option>
  );
};
