import { Separator } from '@/src/components/ui/separator';
import Image from 'next/image';
import { FacebookIcon } from '../icons/facebook-icon';
import { TwitterIcon } from '../icons/twitter-icon';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 space-y-6 lg:space-y-0  py-8 lg:px-[84px]">
        <div className="col-span-1 mx-auto">
          <Image
            height={41}
            width={171}
            style={{ width: '150px', height: '47px', borderRadius: '10px' }}
            alt="Logo Banco Alex"
            src="/assets/images/navigation/logo-bank-01.png"
          />
        </div>
        <div className="lg:col-span-2 text-start flex justify-center text-gray-100">
          <div className="flex gap-x-4 lg:gap-x-6 xl:gap-x-16">
            <div>
              <h2 className="mb-[2px]">Reclamos</h2>
              <p className="font-bold">0800-1010-1010</p>
            </div>
            <Separator orientation="vertical" />
            <div>
              <h2 className="mb-[2px]">Atencion al cliente</h2>
              <p className="font-bold">0800-1010-1010</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </div>
    </footer>
  );
};
