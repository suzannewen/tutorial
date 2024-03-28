import * as React from "react";

export interface ErrorInfo {
  message: string;
  problem: any;
}

export function isError<T>(e: T | Error): e is Error{
  if( e === undefined ){
    return false;
  }

  const error = e as Error;
  if( !error.name){
    return false;
  }
  if( !error.message ){
    return false;
  }
  return true;
}

export function isErrorInfo<T>(e: T | ErrorInfo): e is ErrorInfo{
  if( e === undefined || e == null ){
    return false;
  }
  return (e as ErrorInfo).message !== undefined &&
    (e as ErrorInfo).problem !== undefined;
}

