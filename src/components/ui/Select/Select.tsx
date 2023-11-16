"use client";
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons";
import React from "react";
import * as SelectElement from "@radix-ui/react-select";
import { ControllerRenderProps } from "react-hook-form";
import cn from "src/utils/cn";

interface FormSlectProps extends ControllerRenderProps {
  children?: React.ReactNode;
}

export const Select = React.forwardRef<HTMLButtonElement, FormSlectProps>(
  ({ name, onChange, disabled, children, value }, ref) => {
    return (
      <SelectElement.Root
        name={name}
        onValueChange={(value) => onChange({ target: { name, value } })}
        disabled={disabled}
        defaultValue={value}
      >
        <SelectElement.Trigger
          className="w-fit px-2 border-transparent border-r-black border outline-none"
          ref={ref}
        >
          <SelectElement.Value />
        </SelectElement.Trigger>

        <SelectElement.Portal>
          <SelectElement.Content
            position="popper"
            className="overflow-hidden bg-neutral-800 rounded-md z-50 max-h-96"
          >
            <SelectElement.ScrollUpButton className="flex justify-center py-2">
              <ArrowUpIcon />
            </SelectElement.ScrollUpButton>
            <SelectElement.Viewport className="py-[5px] font-bold text-center">
              {children}
            </SelectElement.Viewport>
            <SelectElement.ScrollDownButton className="flex justify-center py-2">
              {<ArrowDownIcon />}
            </SelectElement.ScrollDownButton>
          </SelectElement.Content>
        </SelectElement.Portal>
      </SelectElement.Root>
    );
  }
);

interface InputProps extends SelectElement.SelectItemProps {}

export const SelectItem = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <SelectElement.Item
        className={cn(
          "text-zinc-400 px-2 hover:text-white cursor-pointer outline-none text-center text-md hover:bg-neutral-800 " +
            (props.disabled
              ? "opacity-50 cursor-default hover:bg-transparent hover:text-zinc-400"
              : ""),
          props.className
        )}
        {...props}
        ref={ref}
      >
        <SelectElement.ItemText>{props.children}</SelectElement.ItemText>
      </SelectElement.Item>
    );
  }
);

interface GroupProps extends SelectElement.SelectGroupProps {}

export const SelectGroup = React.forwardRef<HTMLInputElement, GroupProps>(
  (props, ref) => {
    return (
      <SelectElement.Group
        className={cn("", props.className)}
        {...props}
        ref={ref}
      >
        {props.content ? (
          <SelectElement.Label>{props.content}</SelectElement.Label>
        ) : null}
        {props.children}
      </SelectElement.Group>
    );
  }
);
