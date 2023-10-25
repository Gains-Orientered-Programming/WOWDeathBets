import Image from "next/image";
import {
  CharacterEquipment,
  EquippedItem,
} from "src/types/blizzard/characterEquipment.t";
import { charaterPanel, colorQuality } from "./data";
import { type ISlot } from "./types";

export const ItemPanel = ({ items }: { items: CharacterEquipment }) => {
  return (
    <>
      <div className="p-[24px] bg-zinc-800 w-[900px] rounded-sm h-auto">
        <div className="flex gap-[16px] flex-row flex-wrap justify-between">
          <div className="flex flex-col gap-[4px] w-[calc(50%-8px)]">
            {charaterPanel.left.map((slot) => (
              <ItemRow
                key={slot.name}
                item={items.equipped_items.find(
                  (item) => item.slot.type === slot.name
                )}
                slot={slot}
              />
            ))}
          </div>
          <div className="flex flex-col gap-[4px] w-[calc(50%-8px)]">
            {charaterPanel.right.map((slot) => (
              <ItemRow
                key={slot.name}
                item={items.equipped_items.find(
                  (item) => item.slot.type === slot.name
                )}
                slot={slot}
                reverse={true}
              />
            ))}
          </div>
        </div>
        <div className="mt-[15px]">
          <div className={"flex flew-row gap-2 w-full"}>
            {charaterPanel.weapons.map((slot) => (
              <div key={slot.name} className="w-full flex flex-col gap-1">
                <div className="text-xs text-slate-300">
                  {slot.name.charAt(0) +
                    slot.name.replace("_", " ").slice(1).toLowerCase()}
                </div>
                <ItemRow
                  item={items.equipped_items.find(
                    (item) => item.slot.type === slot.name
                  )}
                  slot={slot}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ItemRow = ({
  item,
  slot,
  reverse = false,
}: {
  item: EquippedItem | undefined;
  slot: ISlot;
  reverse?: boolean;
}) => {
  return (
    <>
      <div
        className={
          "items-center bg-zinc-900 rounded-sm flex justify-between overflow-hidden py-[8px] px-[12px] " +
          (reverse ? "flex-row-reverse" : "")
        }
      >
        <div
          className={
            "items-center flex w-full " + (reverse ? "flex-row-reverse" : "")
          }
        >
          <div
            style={{
              outlineColor: item
                ? colorQuality.get(item.quality.type)
                : colorQuality.get("POOR"),
            }}
            className="outline outline-2 w-[36px] h-[36px]"
          >
            <Image
              className="w-full h-full"
              src={
                item
                  ? `https://static.bigbrain.gg/wow/item/assets/${item.item.id}.webp`
                  : slot.empty_image
              }
              alt="item image"
              width={36}
              height={36}
            />
          </div>
          <div className="flex flex-col my-0 mx-[8px] overflow-hidden">
            <div
              style={{
                color: item
                  ? colorQuality.get(item.quality.type)
                  : colorQuality.get("POOR"),
              }}
              className="text-sm font-medium text-ellipsis whitespace-nowrap"
            >
              {item?.name}
            </div>
            {item?.enchantments?.map((ench) =>
              ench.enchantment_slot.id === slot.slot ? (
                <div
                  key={ench.enchantment_id}
                  className={
                    "flex items-center " + (reverse ? "justify-end" : "")
                  }
                >
                  <div className="w-[14px] h-[14px] min-w-[16px] max-w-[16px] outline outline-slate-500 outline-2 rounded-sm overflow-hidden inline-flex">
                    <Image
                      className="w-full h-full"
                      src="https://static.bigbrain.gg/wow/item/assets/200054.webp"
                      alt="enchant image"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className="text-slate-300 text-xs ml-[5px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {ench.display_string}
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
};
