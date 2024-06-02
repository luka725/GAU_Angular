export interface RoomState {
    data: any[];
    loading: boolean;
    error: any;
  }
  
  export const initialRoomState: RoomState = {
    data: [],
    loading: false,
    error: null
  };
  