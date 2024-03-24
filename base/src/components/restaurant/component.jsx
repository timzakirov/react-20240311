import { Menu } from '../menu/component'
import { Reviews } from '../reviews/component'

export const Restaurant = ({ restaurant }) => {
	if (!restaurant) {
		return null;
	}

	const { name, menu, reviews } = restaurant;

	return (
		<div>
			<h3>{name}</h3>

			<h4>Меню</h4>
			<Menu menu={menu} />

			<h4>Отзывы</h4>
			<Reviews reviews={reviews} />
	  	</div>
	);
};