import { data } from "react-router-dom";

export type ApiEnvelope<T> ={
  status:'success'|'error'
  data: T|null; 
  meta?: Record<string, unknown>; 
  errors?:Array<{message: string; code?:string}>
}

export function ok<T>(data:T, meta?:Record<string, unknown>):ApiEnvelope<T>{
      return {
      status:'success',
    data, meta
  }
}

export function fail<T>(message: string, code?:string): ApiEnvelope<T>{
  return {status:'error', data: null, errors: [{message, code}]}
}