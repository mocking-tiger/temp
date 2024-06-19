import chunk from "./chunk";

describe("chunk", () => {
  const array = [1, 2, 3, 4];

  it("기본테스트", () => {
    expect(chunk(array, 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it("두번째 인수를 주지 않는 경우", () => {
    expect(chunk(array)).toEqual([[1], [2], [3], [4]]);
  });

  it("균등하게 분배되지 않는 경우", () => {
    expect(chunk(array, 3)).toEqual([[1, 2, 3], [4]]);
  });

  it.each([0, -1])("size가 0또는 음수일 때", (num) => {
    expect(chunk(array, num)).toEqual([]);
  });

  it("size가 배열의 length보다 클 때", () => {
    expect(chunk(array, 5)).toEqual([[1, 2, 3, 4]]);
  });
});
