"use client";

import { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { Input } from "../ui/input";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

const Search = ({
  placeholder = "Search Events...",
}: {
  placeholder?: string;
}) => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";
      if (query) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: query,
        });
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
      }
      router.push(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, searchParams, router]);

  return (
    <div className="flex items-center min-h-[5xpx] overflow-hidden rounded-md bg-[#28282d] border-[1px] border-white/20 focus:border-white/60 placeholder:text-white/70 caret-white px-4 py-2 ">
      <LuSearch size={22} />
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-[#28282d] border-none placeholder:text-white/70"
      />
    </div>
  );
};

export default Search;
