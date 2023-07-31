import { NextRouter } from 'next/router';
export declare const FixRoutePrivate: (router: NextRouter) => string;
export declare const FixRoutePublic: (route: NextRouter) => string;
export declare const GetRoutePrivate: (router: NextRouter) => string;
export declare const GetRoutePublic: (router: NextRouter) => string;
declare const useRouterPrivate: () => {
    next: NextRouter;
    asPath: string;
    asPathRelative: string;
    push: (path: string) => Promise<boolean>;
    FixRoutePrivate: (router: NextRouter) => string;
    FixRoutePublic: (route: NextRouter) => string;
    GetRoutePrivate: (router: NextRouter) => string;
};
export declare const useRouterPublic: () => {
    next: NextRouter;
    asPath: string;
    asPathRelative: string;
    push: (path: string) => Promise<boolean>;
    FixRoutePrivate: (router: NextRouter) => string;
    FixRoutePublic: (route: NextRouter) => string;
    GetRoutePrivate: (router: NextRouter) => string;
};
export default useRouterPrivate;
