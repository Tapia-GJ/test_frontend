import { apiFetch } from "@/config/api";
import { type User } from "@/types/user";
import type { UserFormData, UpdateUserFormData } from "@/schemas/userSchema";

export async function getUsersRequest(): Promise<User[]> {
  return apiFetch("/users");
}

export async function getUserByIdRequest(id: number): Promise<User> {
  return apiFetch(`/users/${id}`);
}

export async function updateUserRequest(
  id: number,
  data: UpdateUserFormData,
): Promise<User> {
  return apiFetch(`/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function createUserRequest(data: UserFormData): Promise<User> {
  return apiFetch("/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function deleteUserRequest(id: number): Promise<void> {
  return apiFetch(`/users/${id}`, {
    method: "DELETE",
  });
}
