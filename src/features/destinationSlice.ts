import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDestinations } from "../api/getDestinations";
import { AppDispatch, AppThunk } from "../store/Store";


export const fecthDestinationsAsync = createAsyncThunk(
    'destination/fetchDestinations',
    async (_, { dispatch, getState }) => {
        try {
            dispatch(fetchDestinationsStart());
            const response = await getDestinations();
            dispatch(fetchDestinationsSuccess(response.data))
        } catch (error) {
            dispatch(fetchDestinationsFailure(error.message));
          }
    }
)

export const fetchDestinationsStart = () => ({ type: 'destination/fetchDestinationsStart' });
export const fetchDestinationsSuccess = (destinations: Destination[]) => ({ type: 'destination/fetchDestinationsSuccess', payload: destinations });
export const fetchDestinationsFailure = (error: string) => ({ type: 'destination/fetchDestinationsFailure', payload: error });

export const fetchDestinations = (): AppThunk => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchDestinationsStart());
      const response = await getDestinations();
      dispatch(fetchDestinationsSuccess(response.data));
    } catch (error) {
      dispatch(fetchDestinationsFailure(error.message));
    }
  };