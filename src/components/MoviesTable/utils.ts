import { Movie, Movies, Order, OrderBy } from "./types";

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(
  order: Order,
  orderBy: OrderBy
): (
  a: { [key in OrderBy]: number | string },
  b: { [key in OrderBy]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(movies: Movies, order: Order, orderBy: OrderBy) {
  const stabilizedThis = movies.map(
    (movie, index) => [movie, index] as [Movie, number]
  );
  const comparator = getComparator(order, orderBy);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
}
