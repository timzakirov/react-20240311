import { useState } from "react";
import { RestaurantTabs } from "./components/restaurant-tabs/component";
import { Restaurant } from "./components/restaurant/component";
import { restaurants } from "./constants/mock";
import { Layout } from './components/layout/component';
import { getStorageItem, setStorageItem } from "./utils/storage";

const ACTIVE_RESTAURANT_INDEX_STORAGE_KEY = "activeRestaurantIndex";

export const App = () => {
	const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(() =>
		Number(getStorageItem(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY))
	);
	const activeRestaurant = restaurants[activeRestaurantIndex];

	return (
		<Layout>
			<RestaurantTabs
				restaurants={restaurants}
				onTabClick={(index) => {
					setActiveRestaurantIndex(index);
					setStorageItem(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY, index);
				}}
				activeTabIndex={activeRestaurantIndex}
			/>
			{activeRestaurant ? (
				<Restaurant restaurant={activeRestaurant} />
			) : (
				<span>SelectRestaurant</span>
			)}
		</Layout>
	);
};