import { onSelectRowHookUtils } from "../utils";

describe("Utils MoviesTableBody", () => {
  test("onSelectRowHookUtils", () => {
    const select = [1, 2, 3, 4, 5, 6];

    const result1 = onSelectRowHookUtils(select, 1);
    const result2 = onSelectRowHookUtils(select, 0);

    expect(result1).toEqual([2, 3, 4, 5, 6]);
    expect(result2).toEqual([1, 2, 3, 4, 5, 6, 0]);
  });
});
