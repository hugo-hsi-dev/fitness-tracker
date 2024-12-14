import { type PropsWithChildren } from 'react';

import { NextUIProvider as Provider } from '@nextui-org/react';
import {
  useRouter,
  type NavigateOptions,
  type ToOptions,
} from '@tanstack/react-router';

declare module '@react-types/shared' {
  interface RouterConfig {
    href: ToOptions['to'];
    routerOptions: Omit<NavigateOptions, keyof ToOptions>;
  }
}

export default function NextUIProvider({ children }: PropsWithChildren) {
  const router = useRouter();
  return (
    <Provider
      navigate={(to, options) => router.navigate({ to, ...options })}
      useHref={(to) => router.buildLocation({ to }).href}
    >
      {children}
    </Provider>
  );
}
