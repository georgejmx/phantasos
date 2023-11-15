import { getDreams } from "@/app/api/dream/fetchers";
import ActionBar from "@/components/ActionBar";
import Dream from "@/components/Dream";

export default async function History(): Promise<JSX.Element> {
  const dreams = await getDreams();

  return (
    <>
      <h1 className="text-xl font-bold text-purple-500 underline">
        Full History
      </h1>
      {dreams ? (
        <div className="overflow-auto">
          {dreams.map((dream) => (
            <Dream
              key={dream.id}
              text={dream.dreamtext}
              date={dream.date}
              goal={dream.goal}
              aspect={dream.aspect}
            />
          ))}
        </div>
      ) : (
        <p className="text-cyan-500 italic p-2 my-4">
          Error fetching dreams from server
        </p>
      )}
      <ActionBar />
    </>
  );
}
