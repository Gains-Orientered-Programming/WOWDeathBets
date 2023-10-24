export interface ItemPanelType {
  left: ISlot[];
  right: ISlot[];
  weapons: ISlot[];
}

export interface ISlot {
  name: string;
  slot: number;
  empty_image: string;
}
