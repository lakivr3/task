"use client";
import { DataType, EditProp, TData } from "@/types";
import { Input } from "@chakra-ui/react";
import { CellContext, TableMeta } from "@tanstack/react-table";
import { useState, useEffect } from "react";
import TaskHook from "../hooks/taskHook";

export default function EditableCell({
  row,
  column,
  getValue,
  table,
}: CellContext<DataType, any>) {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const { updateData, addRow } = table.options.meta as any;
  const handleChange = () => {
    updateData(row.index, column.id, value);
  };
  useEffect(() => {
    setValue(initialValue);
    if (row.original.task === null && row.original.project === undefined) {
      setValue(value);
      updateData(row.index, column.id, value);
    }
  }, [initialValue]);

  return (
    <Input
      id={value}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleChange}
      variant="filled"
      size="sm"
      w="85%"
      overflow="hidden"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
    />
  );
}
