import { createSlice, configureStore} from '@reduxjs/toolkit'
import { StateHero, ActionSearchHero, ActionSselectHero } from '../types'


// Define a type for the slice state


// Define the initial state using that type
const initialState: StateHero = {
  searchHero: '',
  selectHero: [],
  quantifySelectHero: 0,
}



const counterSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
  updateSearch: {
      reducer(state, action: ActionSearchHero) {
       
        if(action.payload?.searchHero){
          
          state.searchHero = action.payload.searchHero
        } 
       
     
      }
    ,
      prepare(searchHero){
        return {
          payload: {
            searchHero
           
            
          }
        }
      }
    },
    AddSelecHero: {
      reducer(state, action: ActionSselectHero) {
    
        if(state?.selectHero){
        
          state.selectHero?.push(...action.payload.selectHero)
          state.quantifySelectHero = state.quantifySelectHero + 1
        } else{
        
          state.selectHero = action.payload.selectHero
          state.quantifySelectHero = state.quantifySelectHero + 1
        }
       
     
      }
    ,
      prepare(selectHero){
        return {
          payload: {
            selectHero,
           
            
          }
        }
      }
    },
    deleteSelectHero: {
      reducer(state) {
       
        
          
          state.selectHero = []
          state.quantifySelectHero = 0
        
       
     
      }
    ,
      prepare(){
        return {
          payload: {
           
           
            
          }
        }
      }
    },
  }
})

export const { updateSearch, AddSelecHero, deleteSelectHero } = counterSlice.actions

export const store = configureStore({
  reducer: counterSlice.reducer
})

