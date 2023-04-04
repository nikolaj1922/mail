import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IEmailRow } from "@/types";

interface IMailSlice {
  sendMessageIsOpen: boolean;
  selectedMail: IEmailRow | null;
}

const initialState: IMailSlice = {
  sendMessageIsOpen: false,
  selectedMail: null,
};

const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    selectMail: (state, action: PayloadAction<IEmailRow>) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage, selectMail } =
  mailSlice.actions;
export default mailSlice.reducer;
