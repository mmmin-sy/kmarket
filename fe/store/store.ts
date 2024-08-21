import { create } from "zustand";
import { Filter } from "@/types/filter";

interface State {
	filters: Filter;
	actions: {
		updatePrice: (min: number | null, max: number | null) => void
		reset: () => void
	}
}

const useStore = create<State>((set) => ({
	filters: { "price" : null},
	actions: {
		updatePrice: (min: number | null, max: number | null) => set((state) => ({
			filters: { "price" : { "min": min,  "max": max }}
		})),
		reset: () => set(() => ({ filters: { "price" : null}}))
	}
}));

export default useStore;