import { useState } from "react";
import { Counter } from "../counter/component";

export const Dish = ( { dish } ) => {
	const [amount, setAmount] = useState(0);
	
	return (
		<div>
			<span>{ dish.name }</span>
			<Counter value={amount} onChange={setAmount} />
		</div>
	)
};