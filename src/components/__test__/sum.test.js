import { sum } from "../sum";

test("Sum of the provided value should give 7", () => {
  const result = sum(3, 4);

  expect(result).toBe(7);
});
