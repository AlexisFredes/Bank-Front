import { accountService } from '@/src/api/account/account';
import { APP_BASE_ROUTE } from '@/src/app/app-routes';
import { Button } from '@/src/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/src/components/ui/dialog';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { useModal } from '@/src/hooks/use-modal-store';
import { RootState } from '@/src/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import * as z from 'zod';
import { useToast } from '../../ui/use-toast';

const TransferSchema = z.object({
  amount: z.string()
});

export const TransferModal = () => {
  const { isOpen, onClose, type } = useModal();
  const { toast } = useToast();
  const isModalOpen = isOpen && type === 'transfer';
  const router = useRouter();
  const account = useSelector((state: RootState) => state.account.value);
  const { t } = useTranslation(['account', 'common']);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm<z.infer<typeof TransferSchema>>({
    resolver: zodResolver(TransferSchema),
    defaultValues: {
      amount: ''
    },
    mode: 'onBlur'
  });

  const handleClose = () => {
    reset();
    onClose();
  };
  const watchAllFields = watch();

  const isFormFilled = watchAllFields.amount;

  const onSubmit = async (values: z.infer<typeof TransferSchema>) => {
    const response = await accountService.transaction({
      type: 'withdraw',
      amount: Number(values.amount),
      accountId: account.id
    });
    if (response?.error) {
      toast({
        variant: 'destructive',
        title: 'Error al transferir',
        description: response.error as string
      });
      return;
    }
    handleClose();
    toast({
      variant: 'default',
      title: 'Transferencia exitosa'
    });
    router.push(APP_BASE_ROUTE);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[90%] md:w-[622px]">
        <div className="flex flex-col justify-center items-center p-2">
          <DialogHeader className="font-bold text-[28px] mb-4 mt-8 leading-[32px] items-center">
            <DialogTitle>{t('account:TRANSFER.MODAL_TITLE')}</DialogTitle>
          </DialogHeader>
          <div className="w-full">
            <Label htmlFor="amount">{t('common:GLOBAL.AMOUNT')}</Label>
            <Input
              variant={errors.amount ? 'error' : 'default'}
              type="number"
              {...register('amount')}
            />
            <div className="text-error-dark text-sm h-5 my-1">
              {errors.amount && typeof errors.amount.message === 'string' && (
                <span>{errors.amount.message}</span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button
            className="w-[40%]"
            onClick={handleSubmit(onSubmit)}
            disabled={!isFormFilled}
          >
            {t('account:TRANSFER.BUTTON_TEXT')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
