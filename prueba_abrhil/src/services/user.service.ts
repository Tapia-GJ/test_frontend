import { apiFetch } from "@/config/api";
import { type User } from "@/types/user";

export async function getUsersRequest(): Promise<User[]> {
  return apiFetch("/users");
}

export async function getUserByIdRequest(id: number): Promise<User> {
  return apiFetch(`/users/${id}`);
}

export async function updateUserRequest(
  id: number,
  data: Partial<User>,
): Promise<User> {
  return apiFetch(`/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}
