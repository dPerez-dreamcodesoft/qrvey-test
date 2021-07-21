import superheroes from "../../../src/controllers/superheroes/superheroes";
import operationsDB from "../../../src/commons/operationsDB";
import { RequestHeroes, DynamoResponses, SuccesResponse } from "./heroesMocks";

describe("crud heroes", () => {
  it("success insert", async () => {
    let createRequest: any = RequestHeroes.createHero;
    let expectedResponse: any = SuccesResponse.insertOne;
    let insertOne: any = DynamoResponses.insertSuccess;
    let insertOneOperation: any = jest
      .spyOn(operationsDB, "addElement")
      .mockReturnValueOnce(insertOne);
    let response: any = await superheroes.createSuperheroe(createRequest);
    expect(response.body).toBeTruthy();
    insertOneOperation.mockRestore();
  });

  it("Error insert", async () => {
    let createRequest: any = RequestHeroes.createHero;
    let response: any = await superheroes.createSuperheroe(createRequest);
    expect(response.body).toBeTruthy();
  });

  it("success List", async () => {
    let insertOne: any = DynamoResponses.insertSuccess;
    let insertOneOperation: any = jest
      .spyOn(operationsDB, "getAllElements")
      .mockReturnValueOnce(insertOne);
    let response: any = await superheroes.listSuperheroes();
    expect(response.body).toBeTruthy();
    insertOneOperation.mockRestore();
  });

  it("Bad List", async () => {
    let insertOneOperation: any = jest
      .spyOn(operationsDB, "getAllElements")
      .mockImplementation(() => {
        throw new Error();
      });
    let response: any = await superheroes.listSuperheroes();
    expect(response.body).toBeTruthy();
    insertOneOperation.mockRestore();
  });

  it("success get", async () => {
    let insertOne: any = DynamoResponses.insertSuccess;
    let insertOneOperation: any = jest
      .spyOn(operationsDB, "getElement")
      .mockReturnValueOnce(insertOne);
    let response: any = await superheroes.getSuperheroe("123");
    expect(response.body).toBeTruthy();
    insertOneOperation.mockRestore();
  });

  it("Error get", async () => {
    let insertOneOperation: any = jest
      .spyOn(operationsDB, "getElement")
      .mockImplementation(() => {
        throw new Error();
      });
    let response: any = await superheroes.getSuperheroe("123");
    expect(response.body).toBeTruthy();
    insertOneOperation.mockRestore();
  });

  it("Error get undefine", async () => {
    let insertOne: any = undefined;
    let insertOneOperation: any = jest
      .spyOn(operationsDB, "getElement")
      .mockReturnValueOnce(insertOne);
    let response: any = await superheroes.getSuperheroe("123");
    expect(response.body).toBeTruthy();
    insertOneOperation.mockRestore();
  });

  it("success update", async () => {
    let createRequest: any = RequestHeroes.createHero;
    let insertOne: any = DynamoResponses.insertSuccess;
    let insertOneOperation: any = jest
      .spyOn(operationsDB, "updateElement")
      .mockReturnValueOnce(insertOne);
    let response: any = await superheroes.updateSuperheroes(createRequest);
    expect(response.body).toBeTruthy();
    insertOneOperation.mockRestore();
  });

  it("Error update", async () => {
    let createRequest: any = RequestHeroes.createHero;
    let insertOne: any = DynamoResponses.insertSuccess;
    let insertOneOperation: any = jest
      .spyOn(operationsDB, "updateElement")
      .mockImplementation(() => {
        throw new Error();
      });;
    let response: any = await superheroes.updateSuperheroes(createRequest);
    expect(response.body).toBeTruthy();
    insertOneOperation.mockRestore();
  });

  it("success delete", async () => {
    let insertOne: any = DynamoResponses.insertSuccess;
    let insertOneOperation: any = jest
      .spyOn(operationsDB, "deleteElement")
      .mockReturnValueOnce(insertOne);
    let response: any = await superheroes.deleteSuperheroe("123");
    expect(response.body).toBeTruthy();
    insertOneOperation.mockRestore();
  });

  it("Error delete", async () => {
    let insertOneOperation: any = jest
      .spyOn(operationsDB, "deleteElement")
      .mockImplementation(() => {
        throw new Error();
      });
    let response: any = await superheroes.deleteSuperheroe("123");
    expect(response.body).toBeTruthy();
    insertOneOperation.mockRestore();
  });

});
