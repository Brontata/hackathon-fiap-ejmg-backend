import userService from "../services/user.service";

class UserController {
  async show(request, response) {
    const user = await userService.findByCpf(request.params.cpf);
    if (!user) {
      return response.status(404).json({ message: "Usuario não encontrado" });
    }

    return response.json(user);
  }

  async saveScore(request, response) {
    try {
      const { userId, gameId, score } = request.body;
      await userService.saveScore(userId, score, gameId);
      return response.json({ message: "Score salvo com sucesso!" });
    } catch (error) {
      return response.status(500).json({ message: "Internal server error" });
    }
  }

  async getScore(request, response) {
    const { cpf } = request.query;
    const score = await userService.getScore(cpf);
    return response.json(score[0]._sum);
  }

  async createUser(request, response) {
    try {
      const { name, cpf } = request.body;
      const user = await userService.createUser(name, cpf);
      return response.json(user);
    } catch (error) {
      return response.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new UserController();
