export interface DataState {
    data: any[];
    loading: boolean;
    error: any;
  }
  
  export const initialDataState: DataState = {
    data: [],
    loading: false,
    error: null
  };
  