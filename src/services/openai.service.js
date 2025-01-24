import { openAIGames } from "../utils/openai.util";
import OpenAI from "openai";
export class OpenAIService {
  async getQuestions(data) {
    const game = openAIGames.filter((item) => item.language === data.game);
    if (game) {
      const level = game[0].data.filter((item) => item.level === data.level);
      if (level) {
        const openai = new OpenAI();
        const response = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: level[0].config,
        });

        const regex = /```json([\s\S]*?)```/;
        const match = regex.exec(response.choices[0].message.content);

        if (match && match[1]) {
          try {
            const questionsArray = JSON.parse(match[1].trim());

            return questionsArray;
          } catch (error) {
            console.error("Erro ao parsear JSON:", error);
          }
        } else {
          console.warn("Nenhum JSON encontrado na resposta.");
        }
      }

      return [];
    }

    return [];
  }
}
