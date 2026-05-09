interface User {
  id: number;
  email: string;
  name: string;
  role: "USER" | "ADMIN";
}

export type { User };
