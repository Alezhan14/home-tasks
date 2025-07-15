import { create } from 'zustand'

export const useHotelStore = create((set) => ({
    hotels: [],
    destination: [],
    formData: {destination: '', adults: '', children: '', checkIn: '', checkOut: ''},
    issues: '',

    fetchDataHotels: async () => {
        set({ issues: [] });

        try {
            const response = await fetch('http://localhost:3000');
            if (!response.ok) {
                set({ issues: 'Network response was not ok' });
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            set({ destination: data });
        } catch (error) {
            set({ issues: error.message });
        }
    },

    fetchFilteredHotels: async (values) => {
        set({ issues: [] });
        set({formData: values});
        set({ hotels: [] });
        console.log('Fetching hotels for:', values);

        try {
            const response = await fetch(`http://localhost:3000/` + values.destination);
            if (!response.ok) {
                set({ issues: 'Not found available hotels in ' + values.destination });
                throw new Error('Not found available hotels in ' + values.destination);
            }
            const data = await response.json();
            set({ hotels: data });
            return data;
        } catch (error) {
            set({ issues: error.message });
            return [];
        }
    },
}));
