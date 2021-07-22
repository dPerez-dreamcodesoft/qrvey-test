import s3Controller from "../../../src/controllers/s3/s3Controller";

describe("61830632", () => {
  it("should upload correctly", async () => {
    const actual = await s3Controller.uploadFile("name", "csv");

    expect(actual).toBeDefined();
  });
});
