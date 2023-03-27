export const filterSearch = (arr: any, value: string) => {
  if (!Number(value)) {
    const filteredByString = arr.filter((item: { name: string }) =>
      item.name.toLowerCase().match(value.toLowerCase())
    );

    return filteredByString;
  } else {
    const filteredByNumber = arr.filter((item: { registry: string }) => {
      return item.registry.toString().toLowerCase().match(value.toLowerCase());
    });

    return filteredByNumber;
  }
};
