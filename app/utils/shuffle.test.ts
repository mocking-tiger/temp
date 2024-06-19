import shuffle from "./shuffle";

describe("shuffle", () => {
  const arr = [1, 2, 3, 4];

  it("원본과 같지 않은지", () => {
    expect(shuffle(arr)).not.toBe([1, 2, 3, 4]);
  });

  it("빈 배열일 때", () => {
    expect(shuffle([])).toEqual([]);
  });

  arr.forEach((item) => {
    it("원본의 밸류들을 다 포함하고 있는지", () => {
      expect(shuffle(arr)).toContain(item);
    });
  });

  it("같은 길이의 배열을 리턴하는지", () => {
    expect(shuffle(arr)).toHaveLength(4);
  });
});
