import type { User } from "@/types/user";

export interface Audit {
  id: number;
  action: string;
  entityId: number;
  actorId: number;
  details: string;
  createdAt: Date;
  actor: User;
}
