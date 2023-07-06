import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Room {
    id: string;
	name: string;
	description: string;
	roomsCount: number;
	bedsCount: number;
	maxOccupancy: number;
	bathroomsCount: number;
	amenities: string[];
	location: string;
	category: 'Beach' | 'Forest' | 'Mountain' | 'Island' | 'Village' | 'Modern' | 'Cruice';
	zone: string;
	images: string[];
	startDate: string;
	endDate: string;
	price: number;

}

interface RoomsState {
    rooms: Room[];
  }
  
  const initialState: RoomsState = {
    rooms: [],
  };
  
  const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
      fetchRooms: (state, action: PayloadAction<Room[]>) => {
        state.rooms = action.payload;
      },
    },
  });
  
  export const { fetchRooms } = roomsSlice.actions;
  
  export default roomsSlice.reducer;