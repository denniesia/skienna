import { useEffect, useState } from "react";

export function useCurrentDate() {
	const [today, setToday] = useState(new Date());

	useEffect(() => {
		let interval;

		const now = new Date();
		const tomorrow = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate() + 1,
		);

		const msUntilMidnight = tomorrow - now;

		const timeout = setTimeout(() => {
			setToday(new Date());

			interval = setInterval(() => {
				setToday(new Date());
			}, 24 * 60 * 60 * 1000);
		}, msUntilMidnight);

		return () => {
			clearTimeout(timeout);
			if (interval) clearInterval(interval);
		};
	}, []);

	return today;
}