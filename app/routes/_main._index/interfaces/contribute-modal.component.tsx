import { z } from "zod";

export interface IContributeModalProps {
  isOpen: boolean;
  onClose: (value: boolean) => void;
}

export const ContributeModalFormSchema = z.object({
  amount: z.number(),
  intent: z.string(),
});

export type TContributeModalForm = z.infer<typeof ContributeModalFormSchema>;
