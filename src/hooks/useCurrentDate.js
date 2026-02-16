import { useEffect, useState } from "react";

export function useCurrentDate() {
	const [today, setToday] = useState(new Date());

	useEffect(() => {
		const now = new Date();
		const tomorrow = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate() + 1,
		);

		const msUntilMidnight = tomorrow - now;

		const timeout = setTimeout(() => {
			setToday(new Date());

			const interval = setInterval(
				() => {
					setToday(new Date());
				},
				24 * 60 * 60 * 1000,
			);

			return () => clearInterval(interval);
		}, msUntilMidnight);

		return () => clearTimeout(timeout);
	}, []);

	return today;
}
