import { apiFetch } from "@/config/api";
import type { Audit } from "@/types/audit";

export async function getAuditsRequest(): Promise<Audit[]> {
  return apiFetch("/audit-logs");
}
