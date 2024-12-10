import { Card } from "@/components/ui";
import { SearchInput } from "./components/SearchInput";

export default function Home() {
  return (
    <Card className="w-[350px]">
      <div className="px-5 py-[50px] w-full">
        <SearchInput />
      </div>
    </Card>
  );
}
