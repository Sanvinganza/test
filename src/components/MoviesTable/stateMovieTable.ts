import { observable, runInAction } from "mobx";
import { IMovieTableItem, Order } from "./types";

const data = [
  {
    title: "The Exorcist",
    year: "1973",
    timeline: "2h 2m",
    rating: "8.1 (452K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWFlZGY2NDktY2ZjOS00ZWNkLTg0ZDAtZDY4MTM1ODU4ZjljXkEyXkFqcGdeQXVyMjUzOTY1NTc@.300_.jpg",
    id: 0,
  },
  {
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    year: "2003",
    timeline: "2h 23m",
    rating: "8.1 (1.2M)",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@.300_.jpg",
    id: 1,
  },
  {
    title: "Rush",
    year: "2013",
    timeline: "2h 3m",
    rating: "8.1 (511K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@.300_.jpg",
    id: 2,
  },
  {
    title: "Network",
    year: "1976",
    timeline: "2h 1m",
    rating: "8.1 (170K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzY0NjU5ODUtOTAzMC00NTU5LWJkZjctYWMyOWY2MTZmOWM1XkEyXkFqcGdeQXVyMTI3ODAyMzE2.300_.jpg",
    id: 3,
  },
  {
    title: "Stand by Me",
    year: "1986",
    timeline: "1h 29m",
    rating: "8.1 (439K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BODJmY2Y2OGQtMDg2My00N2Q3LWJmZTUtYTc2ODBjZDVlNDlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@.300_.jpg",
    id: 4,
  },
  {
    title: "The Wizard of Oz",
    year: "1939",
    timeline: "1h 42m",
    rating: "8.1 (427K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2NjNDU1ZjctN2VhZi00Nzc5LTljNmItMTZiOTg1ODkwYjgwXkEyXkFqcGdeQXVyNTkxMzEwMzU@.300_.jpg",
    id: 5,
  },
  {
    title: "The Incredibles",
    year: "2004",
    timeline: "1h 55m",
    rating: "8.0 (804K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@.300_.jpg",
    id: 6,
  },
  {
    title: "Hachi: A Dog's Tale",
    year: "2009",
    timeline: "1h 33m",
    rating: "8.1 (309K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmQzYjgyYzEtOTVhZC00MDRkLWJjNjItYzU3N2RiMTExZjA1XkEyXkFqcGdeQXVyMTcwOTQzOTYy.300_.jpg",
    id: 7,
  },
  {
    title: "My Father and My Son",
    year: "2005",
    timeline: "1h 52m",
    rating: "8.2 (92K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzEzMWYyYjEtNmVjZS00YTAyLWIyOTgtMzEzNzQxMTQzZTgwXkEyXkFqcGdeQXVyMTA0MTM5NjI2.300_.jpg",
    id: 8,
  },
  {
    title: "Into the Wild",
    year: "2007",
    timeline: "2h 28m",
    rating: "8.1 (656K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjQ0ODlhMWUtNmUwMS00YjExLWI4MjQtNjVmMmE2Y2E0MGRmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@.300_.jpg",
    id: 9,
  },
  {
    title: "The Handmaiden",
    year: "2016",
    timeline: "2h 25m",
    rating: "8.1 (171K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDJhYTk2MTctZmVmOS00OTViLTgxNjQtMzQxOTRiMDdmNGRjXkEyXkFqcGdeQXVyMTMxODk2OTU@.300_.jpg",
    id: 10,
  },
  {
    title: "To Be or Not to Be",
    year: "1942",
    timeline: "1h 39m",
    rating: "8.1 (43K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTIwNDcyMjktMTczMy00NDM5LTlhNDEtMmE3NGVjOTM2YjQ3XkEyXkFqcGdeQXVyNjc0MzMzNjA@.300_.jpg",
    id: 11,
  },
  {
    title: "The Sound of Music",
    year: "1965",
    timeline: "2h 52m",
    rating: "8.1 (259K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BYThiZTY5MTAtODgwNS00OGNjLThjYzItOTcxYmYxMGY5MzBjXkEyXkFqcGdeQXVyNjc5NjEzNA@@.300_.jpg",
    id: 12,
  },
  {
    title: "The Grapes of Wrath",
    year: "1940",
    timeline: "2h 9m",
    rating: "8.1 (100K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzJiOGI2MjctYjUyMS00ZjkzLWE2ZmUtOTg4NTZkOTNhZDc1L2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@.300_.jpg",
    id: 13,
  },
  {
    title: "The Battle of Algiers",
    year: "1966",
    timeline: "2h 1m",
    rating: "8.1 (65K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2M4YTA4ZTEtN2EyNy00YTlmLWE4YzYtYjYyYjRkMWM4ZDM0XkEyXkFqcGdeQXVyMjUzOTY1NTc@.300_.jpg",
    id: 14,
  },
  {
    title: "Groundhog Day",
    year: "1993",
    timeline: "1h 41m",
    rating: "8.0 (682K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@.300_.jpg",
    id: 15,
  },
  {
    title: "Amores Perros",
    year: "2000",
    timeline: "2h 34m",
    rating: "8.1 (252K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjUxNmEwOGItMTBmYi00MWQ1LWExY2MtNDUxMjI0OWM4M2NiXkEyXkFqcGdeQXVyMjUzOTY1NTc@.300_.jpg",
    id: 16,
  },
  {
    title: "Rebecca",
    year: "1940",
    timeline: "2h 10m",
    rating: "8.1 (146K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTcxYWExOTMtMWFmYy00ZjgzLWI0YjktNWEzYzJkZTg0NDdmL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@.300_.jpg",
    id: 17,
  },
  {
    title: "Cool Hand Luke",
    year: "1967",
    timeline: "2h 7m",
    rating: "8.1 (188K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjcwNTQ3Y2EtMjdmZi00ODBhLWFhNzQtOTc3MWU5NTZlMDViXkEyXkFqcGdeQXVyMjUzOTY1NTc@.300_.jpg",
    id: 18,
  },
  {
    title: "The Iron Giant",
    year: "1999",
    timeline: "1h 26m",
    rating: "8.1 (225K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzBjZTNkMzQtZmNkOC00Yzk0LTljMjktZjk3YWVlZjY3NTk2XkEyXkFqcGdeQXVyMTUzMDUzNTI3.300_.jpg",
    id: 19,
  },
  {
    title: "The Help",
    year: "2011",
    timeline: "2h 26m",
    rating: "8.1 (490K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTM5OTMyMjIxOV5BMl5BanBnXkFtZTcwNzU4MjIwNQ@@.300_.jpg",
    id: 20,
  },
  {
    title: "It Happened One Night",
    year: "1934",
    timeline: "1h 45m",
    rating: "8.1 (112K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDg5MmEwZjItODllOS00Yjc4LTk3NzItZWY4ODFlODQzZjJlXkEyXkFqcGdeQXVyNjc5NjEzNA@@.300_.jpg",
    id: 21,
  },
  {
    title: "Dances with Wolves",
    year: "1990",
    timeline: "3h 1m",
    rating: "8.0 (289K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTY3OTI5NDczN15BMl5BanBnXkFtZTcwNDA0NDY3Mw@@.300_.jpg",
    id: 22,
  },
  {
    title: "The 400 Blows",
    year: "1959",
    timeline: "1h 39m",
    rating: "8.1 (128K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTQ4MjA4NmYtYjRhNi00MTEwLTg0NjgtNjk3ODJlZGU4NjRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@.300_.jpg",
    id: 23,
  },
  {
    title: "Drishyam",
    year: "2015",
    timeline: "2h 43m",
    rating: "8.2 (94K)",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmJhZmJlYTItZmZlNy00MGY0LTg0ZGMtNWFkYWU5NTA1YTNhXkEyXkFqcGdeQXVyODE5NzE3OTE@.300_.jpg",
    id: 24,
  },
];

export const movieTableState = {
  movies: observable.array<IMovieTableItem>(data),
  setMovieTableItem(movies: IMovieTableItem[]) {
    runInAction(() => {
      this.movies.replace(movies);
    });
  },
  page: 0,
  setPage(newPage: number) {
    runInAction(() => {
      this.page = newPage;
    });
  },
  rowsPerPage: 5 as 5 | 10 | 25,
  setRowsPerPage(newRowsPerPage: 5 | 10 | 25) {
    runInAction(() => {
      this.rowsPerPage = newRowsPerPage;
    });
  },
  orderBy: "rating" as keyof IMovieTableItem,
  setOrderBy(newOrderBy: keyof IMovieTableItem) {
    runInAction(() => {
      this.orderBy = newOrderBy;
    });
  },
  order: "asc" as Order,
  setOrder(newOrder: Order) {
    runInAction(() => {
      this.order = newOrder;
    });
  },
  selected: [] as number[],
  setSelected(newSelected: number[]) {
    runInAction(() => {
      this.selected = newSelected;
    });
  },
};
