export interface BookingState {
    data: any[];
    loading: boolean;
    error: any;
  }
  
  export const initialBookingDataState: BookingState = {
    data: [],
    loading: false,
    error: null
  };
  