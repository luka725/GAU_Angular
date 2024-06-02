export interface SingleRoomState {
    data: any[];
    loading: boolean;
    error: any;
  }
  
  export const initialSingleRoomState: SingleRoomState = {
    data: [],
    loading: false,
    error: null
  };
  