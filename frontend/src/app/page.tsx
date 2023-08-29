import EmptyDiv from "@/components/EmptyDiv";
import { api } from "@/lib/api";
import { cookies } from "next/headers";
import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

dayjs.locale(ptBr);

interface Memory {
  id: string;
  resume: string;
  createdAt: string;
  coverUrl: string;
}

export default async function Home() {
  const isLogged = cookies().has("token");

  if (!isLogged) {
    return <EmptyDiv />;
  }
  const token = cookies().get("token")?.value;
  const response = await api.get("memories", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const memories = response.data;

  if (memories.length === 0) {
    return <EmptyDiv />;
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory: Memory) => {
        return (
          <div className="space-y-4" key={memory.id}>
            <time className="flex items-center gap-2 text-sm text-gray-100 -ml-8 before:h-px before:w-4 before:bg-gray-50">
              {dayjs(memory.createdAt).format("DD[ de ]MMMM[, ]YYYY")}
            </time>
            <Image
              src={memory.coverUrl}
              alt=""
              width={600}
              height={600}
              className="w-full aspect-video object-cover rounded-lg"
            />
            <p className="text-lg leading-relaxed text-gray-100 text-justify">{memory.resume}</p>
            <Link href={`/memories/${memory.id}`}className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100">
            Ler mais
            <ArrowRight className="w-4 h-4"/>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
