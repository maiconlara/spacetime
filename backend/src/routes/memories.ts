import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function memoriesRoutes(app: FastifyInstance) {
  app.get("/memories", async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        resume: memory.content.substring(0, 110).concat("..."),
      };
    });
  });

  app.get("/memories/:id", async (request) => {
    // const { id } = request.params;
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });
    const { id } = paramsSchema.parse(request.params);

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    });
  });

  app.post("/memories/:", async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });
  });
  app.put("/memories/:id", async () => {});
  app.delete("/memories/:id", async () => {});
}
