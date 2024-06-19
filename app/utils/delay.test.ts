import delay from "./delay";

describe("delay", () => {
  const mock = jest.fn();

  it("일반 호출", () => {
    expect(delay(mock)).toBeUndefined;
  });

  it("아직 호출되면 안 됨", () => {
    delay(mock, 1000);

    expect(mock).not.toHaveBeenCalled();
  });

  it("인수로 받은 시간이 경과 후 호출이 되는지", (done) => {
    delay(mock, 1000);

    setTimeout(() => {
      expect(mock).toHaveBeenCalled();
      done();
    }, 1100);
  });

  it("아규먼트 같이 받는지", (done) => {
    const args = ["arg"];
    delay(mock, 1000, args);

    setTimeout(() => {
      expect(mock).toHaveBeenCalledWith(args);
      done();
    }, 1100);
  });
});
