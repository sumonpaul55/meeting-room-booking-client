import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};
type TRoutPath = {
  name?: string;
  path: string;
  element: ReactNode;
  children?: TRoutPath[];
};

export const generateRoute = (routePaths: TRoutPath[]) => {
  const route = routePaths.reduce((acc: TRoute[], items) => {
    if (items.path && items.element) {
      acc.push({
        path: items.path,
        element: items.element,
      });
    }
    if (items.children) {
      items?.children.forEach((child: TRoutPath) => {
        acc.push({
          path: child.path,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
  return route;
};
