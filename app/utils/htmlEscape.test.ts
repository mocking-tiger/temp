import { escape, unescape } from "./htmlEscaple";

describe("escape", () => {
  it("일반 테스트", () => {
    expect(escape("&")).toEqual("&amp;");
  });

  it("객체에 없는 텍스트를 인수로 받을 때", () => {
    expect(escape("하이")).toEqual("하이");
  });
});

describe("unescape", () => {
  it("일반 테스트", () => {
    expect(unescape("&lt;")).toEqual("<");
  });

  it("객체에 없는 텍스트를 인수로 받을 때", () => {
    expect(unescape("하이")).toEqual("하이");
  });
});
