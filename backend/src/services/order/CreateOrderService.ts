import prismaClient from "../../prisma";

interface OderRequest {
  table: number;
  name: string;
}

class CreateOrderService {
  async execute({ table, name }: OderRequest) {
    const order = await prismaClient.order.create({
      data: {
        table: table,
        name: name,
      },

    });

    return order
  }
}

export { CreateOrderService };
