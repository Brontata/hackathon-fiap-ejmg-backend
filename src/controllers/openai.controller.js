import { OpenAIService } from "../services/openai.service";

class OpenAIController {
  async getQuestions(request, response) {
    const openAiService = new OpenAIService();
    const data = await openAiService.getQuestions(request.query);
    return response.json({ questions: data });
  }
}

export default new OpenAIController();
