import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserState {
  richText: string;
}

const initialState: UserState = {
  richText: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateRichText: (state, action: PayloadAction<string>) => {
      state.richText = action.payload;
    },
  },
});

export const { updateRichText } = userSlice.actions;
export const selectRichText = (state: RootState) => state.user.richText;
export default userSlice.reducer;
