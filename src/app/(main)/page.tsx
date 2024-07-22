'use client';
import { AccountList } from './_components/account-list';
import { Banner } from './_components/banner';
import { DirectAccess } from './_components/direct-access';

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-12 mb-7">
          <Banner />
        </div>
        <div className="w-full xl:w-[1272px]">
          <DirectAccess />
        </div>
        <div className="xl:flex gap-6 mt-7 xl:w-[1272px] w-full">
          <div className="xl:flex-col">
            <AccountList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
