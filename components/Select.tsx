"use client";

import { Select, SelectSection, SelectItem } from "@nextui-org/select";

const data = [
  { value: "모든타입" },
  { value: "Lagacy" },
  { value: "Version1" },
  { value: "Version2" },
  { value: "Version3" },
];

export default function SelectComponent() {
  return (
    <Select
      placeholder="모든타입"
      className="w-48 min-h-16 p-5"
      classNames={{
        selectorIcon: "ease-in-out duration-250",
        trigger: [
          "h-[60px]",
          "border",
          "data-[open=true]:border-codeit_purple",
        ],
      }}
      popoverProps={{
        offset: 0,
      }}
      items={data}
      defaultSelectedKeys={data[0].value}
    >
      {data.map((item, index) => (
        <SelectItem className="p-5" key={index}>
          {item.value}
        </SelectItem>
      ))}
    </Select>
  );
}
