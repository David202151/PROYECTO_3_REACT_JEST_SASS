import pokemonReducer from './features/pokemon/pokemonSlice';
import teamReducer from './features/team/teamSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		pokemon: pokemonReducer,
		team: teamReducer,
	},
});

export default store;