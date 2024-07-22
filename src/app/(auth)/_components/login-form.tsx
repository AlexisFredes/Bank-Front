'use client';
import { authService } from '@/src/api/auth/auth';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardHeader } from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { LoadingButton } from '@/src/components/ui/loading-button';
import { useToast } from '@/src/components/ui/use-toast';
import { useModal } from '@/src/hooks/use-modal-store';
import { AccountData } from '@/src/interfaces/account';
import { AppDispatch } from '@/src/store';
import { setAccount } from '@/src/store/accountSlice';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import * as z from 'zod';
import { APP_BASE_ROUTE } from '../../app-routes';

const LoginSchema = z.object({
  user: z.string(),
  accountNumber: z
    .string()
    .min(6, { message: 'El numero de cuenta debe ser mayor a 6 caracteres' })
});

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { onOpen } = useModal();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      user: '',
      accountNumber: ''
    },
    mode: 'onBlur'
  });
  const watchAllFields = watch();
  const { toast } = useToast();
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const { t } = useTranslation(['login']);

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setIsLoading(true);
    const response = await authService.login(values);
    const error = response?.error;
    const valid = response?.valid;

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error al iniciar sesión, itenta nuevamente',
        description: response.error as string
      });
      setIsLoading(false);
      return;
    }
    if (!valid) {
      toast({
        variant: 'destructive',
        title: 'Esta cuenta no existe.'
      });
      setIsLoading(false);
      return;
    }
    dispatch(setAccount(response.data as AccountData));
    reset();
    router.push(APP_BASE_ROUTE);
    setIsLoading(false);
  };

  const isFormFilled = watchAllFields.user && watchAllFields.accountNumber;

  return (
    <Card className="md:w-[512px] px-12 pb-5 pt-[38px] md:h-[500px] flex items-center justify-center shadow-01 mx-2 xl:mr-[200px] rounded-2xl">
      <div className="xl:w-[408px] xl:h-[400px]">
        <CardHeader>
          <div className="w-full flex flex-col justify-center text-start text-gray-900">
            <h1 className="text-[40px] font-bold leading-[56px]">
              {t('FORM.TITLE')}
            </h1>
            <p className="text-[28px] leading-[32px]">{t('FORM.WELCOME')}</p>
          </div>
        </CardHeader>
        <CardContent className="mt-5 xl:h-[272px]">
          <form onSubmit={handleSubmit(onSubmit)}>
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

            <div className="flex md:justify-between md:flex-row flex-col items-center justify-center md:w-full">
              <Button
                onClick={() => onOpen('createAccount')}
                type="button"
                variant="link"
              >
                {t('FORM.CREATE_ACCOUNT_BTN')}
              </Button>
              <LoadingButton
                loading={isLoading}
                className="px-8 py-3 w-full md:w-[192px] mt-5 md:mt-0"
                type="submit"
                disabled={!isFormFilled || isLoading}
              >
                {t('FORM.LOGIN')}
              </LoadingButton>
            </div>
          </form>
        </CardContent>
      </div>
    </Card>
  );
};
