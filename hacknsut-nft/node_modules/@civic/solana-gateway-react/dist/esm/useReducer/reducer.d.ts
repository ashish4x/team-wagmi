import { RootState } from '../types';
import type { Action } from '.';
export declare const combineReducers: (...reducers: ((state: RootState, action: Action) => RootState)[]) => (state: RootState, action: Action) => RootState;
export declare const reducer: (state: RootState, action: Action) => RootState;
