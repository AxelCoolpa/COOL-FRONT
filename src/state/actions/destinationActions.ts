/* import {
    getDestinations
} from '../../api/getDestinations'

export const FETCH_DESTINATIONS = 'FETCH_DESTINATIONS';


    export const fetchDestinations = async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    const destinations = await getDestinations();
    dispatch({ type: FETCH_DESTINATIONS, payload: destinations });
    return fetchDestinations;
};

 */

import { ThunkDispatch } from '@reduxjs/toolkit';
import { getDestinations } from '../../api/getDestinations';
import { AnyAction, Dispatch } from 'redux';

export const FETCH_DESTINATIONS = 'FETCH_DESTINATIONS';

export const fetchDestinations = () => async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  try {
    const destinations = await getDestinations();
    dispatch({ type: FETCH_DESTINATIONS, payload: destinations });
  } catch (error: any) {
    throw new Error(error.message)
  }
};
