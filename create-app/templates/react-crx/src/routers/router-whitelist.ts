export const whitelist = ["login"];

export const toIsInWhitelist = (id: string) => whitelist.includes(id);
