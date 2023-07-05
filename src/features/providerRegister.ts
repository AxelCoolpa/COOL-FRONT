import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store/Store'
import { registerProviderAPI } from '../api/providerRegisterAPI'


export interface FormProvider {
    companyName: string,
    companyAddress: string,
    companyPhone: string,
    companyEmail: string,
    companyRepresentative: string,
    relatedChannel:string,
    descriptionBusiness:string,
    serviceType:string,
    isRegistered:boolean,
    
  }
  
  interface RegisterState {
    isLoading: boolean
    error: string | null
  }

  const initialState: RegisterState = {
    isLoading: false,
    error: null,
  }

  const registerSlice = createSlice({
    name: 'registerProvider',
    initialState,
    reducers: {
      registerStart: (state) => {
        state.isLoading = true
        state.error = null
      },
      registerSuccess: (state) => {
        state.isLoading = false
        state.error = null
      },
      registerFailure: (state, action: PayloadAction<string>) => {
        state.isLoading = false
        state.error = action.payload
      },
    },
  })
  
  export const { registerStart, registerSuccess, registerFailure } = registerSlice.actions
  
  export default registerSlice.reducer
  
  export const registerProvider = (formData: FormProvider , userID : string): AppThunk => async (dispatch) => {
    try {
      dispatch(registerStart())
  
      const response = await registerProviderAPI(formData, userID)
  
      if (response.status < 310) {
        dispatch(registerSuccess())
      } else {
        const errorData = await response.data
        dispatch(registerFailure(errorData.msg))
      }
    } catch (error) {
      dispatch(registerFailure('An error occurred during registration.'))
    }
  }
  