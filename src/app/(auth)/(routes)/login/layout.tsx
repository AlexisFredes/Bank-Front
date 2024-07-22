const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center xl:justify-end bg-[url('/assets/images/auth/login-background.jpg')] bg-no-repeat bg-cover">
      {children}
    </div>
  );
};

export default AuthLayout;
