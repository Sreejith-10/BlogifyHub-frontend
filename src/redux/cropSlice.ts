import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CropSliceType = {
    openCrop : boolean,
    imageRef : string | undefined,
}

const INITIAL_STATE : CropSliceType = {
    openCrop:false,
    imageRef:"",
}

const cropSlice = createSlice({
    name:"crop",
    initialState:INITIAL_STATE,
    reducers : {
        setOpenCrop : (state,action: PayloadAction<boolean>) => {
            state.openCrop = action.payload
        },
        setImageRef :(state,action:PayloadAction<string | undefined>) =>{
            state.imageRef = action.payload
        },
    }

})

export const {setOpenCrop,setImageRef} = cropSlice.actions

export default cropSlice.reducer