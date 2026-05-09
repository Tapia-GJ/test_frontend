interface User {
  id: number;
  email: string;
  name: string;
  age?: number;
  role: "USER" | "ADMIN";
}

export type { User };
