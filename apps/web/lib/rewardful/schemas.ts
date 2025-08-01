import { z } from "zod";

export const rewardfulImportSteps = z.enum([
  "import-campaign",
  "import-partners",
  "import-customers",
  "import-commissions",
]);

export const rewardfulImportPayloadSchema = z.object({
  userId: z.string(),
  programId: z.string(),
  rewardId: z.string().optional(),
  campaignId: z.string(),
  action: rewardfulImportSteps,
  page: z.number().optional()
});
