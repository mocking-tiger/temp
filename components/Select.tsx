"use client";

import { useState } from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";

const data = [
  { value: "모든타입" },
  { value: "Lagacy" },
  { value: "Version1" },
  { value: "Version2" },
  { value: "Version3" },
];

export default function SelectComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const listItemHeight = "min-h-12";
  const triggerRadius = isOpen ? "rounded-t-md rounded-b-none" : "rounded-md";

  return (
    <Select
      placeholder="모든타입"
      variant="bordered"
      defaultSelectedKeys={[data[0].value]}
      classNames={{
        base: ["max-w-32"],
        selectorIcon: ["!ease-in-out", "!duration-[250ms]"],
        trigger: [
          "border",
          listItemHeight,
          triggerRadius,
          "data-[open=true]:border-codeit_purple",
          "data-[focus=true]:border-codeit_purple",
          "data-[hover=true]:border-codeit_purple",
        ],
        listbox: "p-0",
      }}
      selectionMode="single"
      disallowEmptySelection
      onOpenChange={() => setIsOpen((prev) => !prev)}
      popoverProps={{
        offset: 0,
        classNames: {
          content: [
            "p-0",
            "border",
            "border-default-200",
            "shadow-none",
            "rounded-b-md rounded-t-none",
          ],
        },
      }}
      listboxProps={{
        variant: "light",
      }}
      items={data}
    >
      {data.map((item, index) => (
        <SelectItem
          key={index}
          classNames={{
            base: ["m-0", "text-neutral-400", listItemHeight],
          }}
          showDivider
          hideSelectedIcon
        >
          {item.value}
        </SelectItem>
      ))}
    </Select>
  );
}
