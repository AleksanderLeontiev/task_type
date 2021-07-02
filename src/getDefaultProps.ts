import React from "react";

export type DefaultPropsType<T> = T extends React.ComponentType<infer P>
  ? React.ComponentType<P>["defaultProps"]
  : never;

export const getDefaultProps = <T>(
  component: React.ComponentType<T>
): DefaultPropsType<React.ComponentType<T>> => component.defaultProps;
