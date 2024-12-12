/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SongTrackType } from '../types/SongTrack';

type PlayerType = {
  isPlaying: boolean;
  currentSong: SongTrackType | null;
  currentProgress: number | null;
};

const initialState: PlayerType = {
  isPlaying: false,
  currentSong: null,
  currentProgress: null,
};

const playerSlice = createSlice({
  name: 'boolean',
  initialState,
  reducers: {
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },

    setCurrentSong: (state, action: PayloadAction<SongTrackType | null>) => {
      state.currentSong = action.payload;
    },

    setCurrentProgress: (state, action: PayloadAction<number | null>) => {
      state.currentProgress = action.payload;
    },
  },
});

export default playerSlice.reducer;
export const { setIsPlaying, setCurrentSong, setCurrentProgress } =
  playerSlice.actions;