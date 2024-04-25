import GetCard from "@/components/getCard";
import PostCard from "@/components/postCard";

function App() {
  return (
    <main className="grid bg-[#171717] w-svw h-svh place-items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
        <GetCard />
        <PostCard />
      </div>
    </main>
  );
}

export default App;
