export interface filtersDataProps {
  id: string;
  label: string;
}

export interface FilterProps {
  id: string;
  title: string;
  checkedFilterType: string[];
  setCheckedFilterType: (value: string[]) => void;
  array: any[];
}
