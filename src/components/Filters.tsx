import type { Sort } from "@/hooks/useFilterSelect";
import { Dropdown, type DropdownOption } from "./ui/select";

interface IProps {
  sort: Sort | '';
  tagOptions: DropdownOption[];
  selectedTag?: string;
  handleReset: () => void;
  handleTagChange: (value: string) => void;
  handleChangeSort: (sort: Sort) => void;
}

const SORT_OPTIONS = [
  { value: "totalReactions", title: "Total Reaction" },
  { value: "reactionRatio", title: "Reaction Ratio" },
];

export const Filters = ({
  sort,
  tagOptions,
  selectedTag,
  handleReset,
  handleTagChange,
  handleChangeSort,
}: IProps) => {
  return (
    <div className="flex items-center flex-wrap gap-x-[20px] gap-y-[10px] sticky top-0 py-[10px] bg-white">
      <Dropdown
        placeholder="Select filter..."
        options={tagOptions}
        value={selectedTag}
        onChange={handleTagChange}
      />
      <Dropdown
        placeholder="Select sort..."
        options={SORT_OPTIONS}
        value={sort}
        height={70}
        onChange={handleChangeSort}
      />
      {(sort || selectedTag) && (
        <button
          className="border bg-red-400 text-white px-[10px] py-[5px] text-base rounded-[6px] transition-colors active:text-black"
          onClick={handleReset}
        >
          Reset All
        </button>
      )}
    </div>
  );
};
