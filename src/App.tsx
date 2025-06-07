import { Filters } from "./components/Filters";
import { PostList } from "./components/PostList";
import { useFilter } from "./hooks/useFilter";
import { usePosts } from "./hooks/usePosts";
import { useFilterSelect } from "./hooks/useFilterSelect";
import { useTagFilter } from "./hooks/useTagFilter";

function App() {
  const { tagOptions } = useTagFilter();
  const { sort, selectedTag, handleChangeSort, handleReset, handleTagChange } =
    useFilterSelect();
  const { postsData, loading } = usePosts();
  const { result } = useFilter(postsData, selectedTag, sort);

  return (
    <div className="flex flex-col gap-[16px] p-[10px]">
      <Filters
        sort={sort}
        tagOptions={tagOptions}
        selectedTag={selectedTag}
        handleReset={handleReset}
        handleTagChange={handleTagChange}
        handleChangeSort={handleChangeSort}
      />

      <PostList postsData={result} loading={loading} />
    </div>
  );
}

export default App;
