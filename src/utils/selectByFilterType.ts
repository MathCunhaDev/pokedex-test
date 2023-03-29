export const selectByFilterType = (array: any[]) => {
  let result: any[] = [];

  for (const items of array) {
    for (const item of items.types) {
      result.push({ value: item, label: item });
    }
  }

  const filteredDuplicated = result.filter(
    (value: any, index: any, array: any[]) =>
      array.findIndex(
        (value2: { label: string }) => value2.label === value.label
      ) === index
  );
  return filteredDuplicated;
};
