'use client';
import { ModalProvider } from '@/src/components/providers/modal-provider';
import { Toaster } from '@/src/components/ui/toaster';
import { TooltipProvider } from '@/src/components/ui/tooltip';
import '@material-symbols/font-300/rounded.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '../lib/i18n';
import store, { persistor } from '../store';
import './globals.css';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ModalProvider />
        <TooltipProvider delayDuration={50} skipDelayDuration={100}>
          <body className="text-gray-900 antialiased">
            <Toaster />
            {children}
          </body>
        </TooltipProvider>
      </PersistGate>
    </Provider>
  );
}
