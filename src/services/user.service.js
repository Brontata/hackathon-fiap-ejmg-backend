import prisma from "../database";

class UserService {
  async findByCpf(cpf) {
    return await prisma.user.findFirst({ where: { cpf } });
  }

  async saveScore(user_id, score, game_id) {
    const user = await prisma.user.findFirst({ where: { id: user_id } });
    return await prisma.rank.create({
      data: {
        user_id: user.id,
        game_id: game_id,
        score: score,
      },
    });
  }

  async getScore(cpf) {
    const user = await prisma.user.findFirst({ where: { cpf } });
    return await prisma.rank.groupBy({
      by: ["user_id"],
      where: { user_id: user.id },
      _sum: { score: true },
    });
  }

  async createUser(user_id, name, cpf) {
    return await prisma.user.create({
      data: {
        id: user_id,
        name: name,
        cpf: cpf,
      },
    });
  }
}

export default new UserService();
