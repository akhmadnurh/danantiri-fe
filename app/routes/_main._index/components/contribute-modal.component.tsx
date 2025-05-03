import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  ContributeModalFormSchema,
  IContributeModalProps,
  TContributeModalForm,
} from "../interfaces/contribute-modal.component";
import { Button } from "~/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const ContributeModalComponent = ({
  isOpen,
  onClose,
}: IContributeModalProps) => {
  const form = useForm<TContributeModalForm>({
    resolver: zodResolver(ContributeModalFormSchema),
  });

  const onSubmit = (data: TContributeModalForm) => {
    console.log(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger>
        <Button variant={"destructive"} size={"lg"} className="mt-2">
          Contribute
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-100">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl">
            Contribute to Pool
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            Enter the amount you want to contribute
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-white py-6"
                      placeholder="Enter amount in IDRX"
                      {...field}
                      type="number"
                      min={1}
                      step="0.01"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <div className="grid grid-cols-1 gap-3 mt-4">
          <Button size={"lg"} className="py-6" variant={"outline"}>
            Approve IDRX
          </Button>
          <Button
            type="submit"
            className="py-6"
            size={"lg"}
            variant={"destructive"}
          >
            Contribute
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContributeModalComponent;
