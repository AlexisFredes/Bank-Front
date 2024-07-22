'use client';
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
import { AccountData } from '@/src/interfaces/account';
import { AppDispatch } from '@/src/store';
import { setAccount } from '@/src/store/accountSlice';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import * as z from 'zod';
import { useToast } from '../../ui/use-toast';

const CreateAccountSchema = z.object({
  user: z.string(),
  accountNumber: z
    .string()
    .min(6, { message: 'El numero de cuenta debe ser mayor a 6 caracteres' }),
  initialBalance: z.string()
});

export const CreateAccount = () => {
  const { isOpen, onClose, type } = useModal();
  const { toast } = useToast();
  const isModalOpen = isOpen && type === 'createAccount';
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const { t } = useTranslation(['login']);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm<z.infer<typeof CreateAccountSchema>>({
    resolver: zodResolver(CreateAccountSchema),
    defaultValues: {
      user: '',
      initialBalance: '',
      accountNumber: ''
    },
    mode: 'onBlur'
  });

  const handleClose = () => {
    reset();
    onClose();
  };
  const watchAllFields = watch();

  const isFormFilled =
    watchAllFields.initialBalance &&
    watchAllFields.accountNumber &&
    watchAllFields.user;

  const onSubmit = async (values: z.infer<typeof CreateAccountSchema>) => {
    const response = await accountService.createAccount(values);
    if (response?.error) {
      toast({
        variant: 'destructive',
        title: 'Error al crear la cuenta',
        description: response.error as string
      });
      return;
    }
    handleClose();
    toast({
      variant: 'default',
      title: 'Cuenta creada con éxito'
    });
    dispatch(setAccount(response as AccountData));
    router.push(APP_BASE_ROUTE);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[90%] md:w-[622px]">
        <div className="flex flex-col justify-center items-center p-2">
          <DialogHeader className="font-bold text-[28px] mb-4 mt-8 leading-[32px] items-center">
            <DialogTitle>{t('CREATE_ACCOUNT.TITLE')}</DialogTitle>
            <span className="text-gray-500 text-sm">
              {t('CREATE_ACCOUNT.DESCRIPTION')}
            </span>
          </DialogHeader>
          <div className="w-full">
            <Label htmlFor="user">{t('FORM.USER')}</Label>
            <Input
              variant={errors.user ? 'error' : 'default'}
              {...register('user')}
            />
            <div className="text-error-dark text-sm h-5 my-1">
              {errors.user && typeof errors.user.message === 'string' && (
                <span>{errors.user.message}</span>
              )}
            </div>
          </div>
          <div className="w-full">
            <Label htmlFor="accountNumber">{t('FORM.ACCOUNT_NUMBER')}</Label>
            <Input
              variant={errors.accountNumber ? 'error' : 'default'}
              {...register('accountNumber')}
            />
            <div className="text-error-dark text-sm h-5 my-1">
              {errors.accountNumber &&
                typeof errors.accountNumber.message === 'string' && (
                  <span>{errors.accountNumber.message}</span>
                )}
            </div>
          </div>
          <div className="w-full">
            <Label htmlFor="initialBalance">{t('FORM.INITIAL_BALANCE')}</Label>
            <Input
              type="number"
              variant={errors.initialBalance ? 'error' : 'default'}
              {...register('initialBalance')}
            />
            <div className="text-error-dark text-sm h-5 my-1">
              {errors.initialBalance &&
                typeof errors.initialBalance.message === 'string' && (
                  <span>{errors.initialBalance.message}</span>
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
            {t('CREATE_ACCOUNT.CREATE')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
