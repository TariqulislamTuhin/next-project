import { CreateUserRequest } from "@dtos/user.dto";
import userRepository from "@repositories/user.repository";
import { revalidatePath } from "next/cache";

export async function getUserAcrion() {
  return userRepository.index();
}
export async function createUserAcrion(param: CreateUserRequest) {
  return userRepository.create(param);
}
