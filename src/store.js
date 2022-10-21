import { legacy_createStore as createStroe } from '@reduxjs/toolkit';
import { WorkReducer } from './reducer';

export const store = createStroe(WorkReducer);
