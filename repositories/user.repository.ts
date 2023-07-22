import { db } from "@database/db";
import { CreateUserRequest } from "@dtos/user.dto";

async function index() {
  return db.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      posts: {
        where: {
          published: true,
        },
      },
    },
  });
}

async function create(request: CreateUserRequest) {
  const { name, email } = request;
  return db.user.create({
    data: {
      name,
      email,
    },
  });
}

async function userFindOne(id: number | string) {
  return db.user.findFirstOrThrow({
    where: {
      OR: [
        {
          id: id as number,
        },
        {
          email: id as string,
        },
      ],
    },
  });
}

async function update() {}
async function remove(id: number | string) {}

const userRepository = {
  index,
  create,
  findOne: userFindOne,
  remove,
  update,
};

export default userRepository;
