"use client";
import { useState, useEffect, useMemo, use } from "react";
import { DataType, EditProp } from "@/types";
import { CellContext } from "@tanstack/react-table";
import {  } from "./Table";

export default function TaskTotal({row,column, table,getValue}: CellContext<DataType, any>) {
  const initialValue = getValue();
  let [value, setValue] = useState(initialValue);
  const {updateData} = table.options.meta as any




  const total = useMemo(()=> {
    return row.original.mon + row.original.tue + row.original.wed + row.original.thu + row.original.fri + row.original.sat + row.original.sun
  }, [row])           

  useEffect(()=> {
    updateData(row.index,column.id, total)
  },[total])
  
  if (row.original.project === "") return;
  else return <span>{total}</span>;
}
