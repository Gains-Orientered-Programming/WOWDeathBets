"use client";
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons";
import React from "react";
import * as Select from "@radix-ui/react-select";
import { ControllerRenderProps } from "react-hook-form";
import cn from "src/utils/cn";

interface FormSlectProps extends ControllerRenderProps {
  children?: React.ReactNode;
}

export const Dropdown = React.forwardRef<HTMLButtonElement, FormSlectProps>(
  ({ name, onChange, disabled, children, value }, ref) => {
    return (
      <>
        <Select.Root
          name={name}
          onValueChange={(value) => onChange({ target: { name, value } })}
          disabled={disabled}
          defaultValue={value}
        >
          <Select.Trigger
            className="w-fit px-2 border-transparent border-r-black border outline-none"
            ref={ref}
          >
            <Select.Value />
          </Select.Trigger>

          <Select.Portal>
            <Select.Content
              position="popper"
              className="overflow-hidden bg-zinc-950 rounded-md z-50 max-h-96"
            >
              <Select.ScrollUpButton className="flex justify-center py-2">
                <ArrowUpIcon />
              </Select.ScrollUpButton>
              <Select.Viewport className="py-[5px] font-bold text-center">
                {children}
              </Select.Viewport>
              <Select.ScrollDownButton className="flex justify-center py-2">
                {<ArrowDownIcon />}
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </>
    );
  }
);

interface InputProps extends Select.SelectItemProps {}

export const SelectItem = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <Select.Item
        className={cn(
          "text-zinc-400 px-2 hover:text-white cursor-pointer outline-none text-center text-md hover:bg-neutral-800",
          props.className
        )}
        {...props}
        ref={ref}
      >
        <Select.ItemText>{props.children}</Select.ItemText>
      </Select.Item>
    );
  }
);

interface GroupProps extends Select.SelectGroupProps {}

export const SelectGroup = React.forwardRef<HTMLInputElement, GroupProps>(
  (props, ref) => {
    return (
      <Select.Group className={cn("", props.className)} {...props} ref={ref}>
        {props.content ? <Select.Label>{props.content}</Select.Label> : null}
        {props.children}
      </Select.Group>
    );
  }
);
