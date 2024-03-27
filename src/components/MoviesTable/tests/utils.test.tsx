import { descendingComparator, stableSort } from "../utils";
import { mockMovie1, mockMovie2 } from "./__mock__/mockMovie";

describe("Utils", () => {
  test("descendingComparator работает корректно", () => {
    const result1 = descendingComparator(mockMovie1, mockMovie2, "id");
    const result2 = descendingComparator(mockMovie1, mockMovie2, "rating");
    const result3 = descendingComparator(mockMovie1, mockMovie2, "year");

    expect(result1).toEqual(1);
    expect(result2).toEqual(-1);
    expect(result3).toEqual(0);
  });
  test("stableSort работает корректно", () => {
    const result1 = stableSort([mockMovie1, mockMovie2], "asc", "id");
    const result2 = stableSort([mockMovie1, mockMovie2], "desc", "timeline");
    const result3 = stableSort([mockMovie1, mockMovie2], "asc", "rating");

    expect(result1).toEqual([mockMovie1, mockMovie2]);
    expect(result2).toEqual([mockMovie1, mockMovie2]);
    expect(result3).toEqual([mockMovie2, mockMovie1]);
  });
});
