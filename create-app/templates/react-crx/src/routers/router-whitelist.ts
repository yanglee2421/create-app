export const whitelist = ["login"];

export const toIsInWl = (id: string) => whitelist.includes(id);
