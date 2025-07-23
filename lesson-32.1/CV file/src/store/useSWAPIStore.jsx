import { create } from 'zustand'

export const useSWAPIStore = create((set) => ({
    planets: [],
    issue: '',

    fetchDataPlanets: async () => {
        try {
            const response = await fetch('https://swapi.info/api/planets')
            if (!response.ok) {
                set({issue: "Response was not ok"})
            }
            const data = await response.json();
            set({planets: data});
        } catch(error) {
            set({issue: "Error message: " + error.message})
        }
    },

    clearDataPlanets: () => {
        set({planets: []})
    }
}))