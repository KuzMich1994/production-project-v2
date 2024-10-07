declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

// declare module '*.svg' {
//   import { ReactElement, SVGProps } from 'react';
//
//   const SVG: (props: SVGProps<SVGElement>) => ReactElement;
//
//   export default SVG;
// }
declare module "*.svg" {
  import React from "react";
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
