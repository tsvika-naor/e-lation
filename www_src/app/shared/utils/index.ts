import { Action } from '@ngrx/store';
import { RequestOptionsArgs, Headers } from '@angular/http';

const typeCache: { [label: string]: boolean } = {};
export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}

export function isNullOrUndefined(param: any): boolean {
  return (param !== null || typeof param !== 'undefined');
}

export function safeAction<S>(action: Action, state: S, func: (payload: any, state: S) => S): S {
  return func(action.payload, Object.assign({}, state));
}

export function getOptions(): RequestOptionsArgs {
        const options: RequestOptionsArgs = {};
        options.headers = new Headers({
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            provider: localStorage.getItem('provider')
        });
        return options;
    }