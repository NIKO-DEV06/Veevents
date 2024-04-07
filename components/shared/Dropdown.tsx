"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { ICategory } from "@/lib/database/models/category.model";
import { startTransition, useEffect, useState } from "react";
import { Input } from "../ui/input";
import {
  createCategory,
  getAllCategories,
} from "@/lib/actions/category.actions";

type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
};

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    createCategory({
      categoryName: newCategory.trimEnd(),
    }).then((category) => {
      setCategories((prevState) => [...prevState, category]);
    });
  };

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();
      categoryList && setCategories(categoryList as ICategory[]);
    };

    getCategories();
  }, []);

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="w-full bg-[#28282d] border-[1px] border-white/20 focus:border-white/60 placeholder:text-white/70 caret-white">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent className="bg-[#39393c] text-white">
        {categories.length > 0 &&
          categories.map((category) => (
            <SelectItem
              className="cursor-pointer"
              key={category._id}
              value={category._id}
            >
              {category.name}
            </SelectItem>
          ))}
        <AlertDialog>
          <AlertDialogTrigger className="py-[0.3rem] pl-[1.5rem] text-[0.9rem] hover:text-[#b1a1ff]">
            Add Category +
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-[#28282d]">
                New Category
              </AlertDialogTitle>
              <AlertDialogDescription>
                <Input
                  type="text"
                  placeholder="Category Name"
                  className="bg-[#28282d] border-[1px] text-white border-white/20 focus:border-white/60 placeholder:text-white/70 caret-white"
                  onChange={(e) => setNewCategory(e.target.value)}
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="hover:text-white bg-[#ee4747] hover:bg-[#e83535]">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-[#5a3ee5] hover:bg-[#4630b0] duration-200"
                onClick={() => startTransition(handleAddCategory)}
              >
                Add
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
