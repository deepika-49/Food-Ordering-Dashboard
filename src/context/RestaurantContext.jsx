import { createContext } from "react";
export const RestaurantContext = createContext(null);
export function RestaurantProvider({ children }) {
    const restaurant = {
        name: "Spice Hub 🍽️",
        status: "Open 🟢"
    };
    return (
        <RestaurantContext.Provider value={restaurant}>
        {children}
        </RestaurantContext.Provider>
    );
}