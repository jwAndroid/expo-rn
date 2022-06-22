// export const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
//   arr.reduce((groups, item) => {
//     (groups[key(item)] ||= []).push(item);
//     return groups;
//   }, {} as Record<K, T[]>);

export type Person = {
  name: string;
  age: number;
};

export const people: Person[] = [
  {
    name: 'Kevin R',
    age: 25,
  },
  {
    name: 'Susan S',
    age: 18,
  },
  {
    name: 'Julia J',
    age: 18,
  },
  {
    name: 'Sarah C',
    age: 25,
  },
];

export const groupBy = <T, K extends keyof any>(
  list: T[],
  getKey: (item: T) => K
) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group]) previous[group] = [];
    previous[group].push(currentItem);
    return previous;
  }, {} as Record<K, T[]>);
