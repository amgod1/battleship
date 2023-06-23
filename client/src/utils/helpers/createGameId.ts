export const createGameId = () => {
	const uuid = crypto.randomUUID().toString();

	return uuid.slice(uuid.lastIndexOf('-') + 1);
};
