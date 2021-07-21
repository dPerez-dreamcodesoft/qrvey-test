import { APIGatewayProxyResult } from "aws-lambda";
import operationsDB from "../../commons/operationsDB";
import {
  DBConfigurations,
  Headers,
  CODES,
  STATUS_DESCRIPTION,
} from "../../config/settings";
import genericFunctions from "../../utils/genericResponse";

/**
 * @name Superheroes
 * @description Class for superheroes
 */
class Superheroes {
  /**
   * @name createSuperheroe
   * @description Method for insert a superheroe
   * @param body this is the new superheroe 
   */
  public async createSuperheroe(body: any): Promise<any> {
    let response: any;
    try {
      const insertDynamo: any = await operationsDB.addElement(
        DBConfigurations.superheroesTable,
        body
      );
      response = await genericFunctions.setResponse(
        CODES.SUCCESS,
        STATUS_DESCRIPTION.SUCCESS,
        body
      );
    } catch (error) {
      response = await genericFunctions.setResponse(
        CODES.SERVER_ERROR,
        STATUS_DESCRIPTION.ERROR,
        null
      );
    }
    return response;
  }

  /**
   * @name listSuperheroes
   * @description method for get all the superheroes from the database
   * @returns {Object}
   */
  public async listSuperheroes(): Promise<any> {
    let response: any;
    try {
      const listDynamo: any = await operationsDB.getAllElements(
        DBConfigurations.superheroesTable
      );
      
      response = await genericFunctions.setResponse(
        CODES.SUCCESS,
        STATUS_DESCRIPTION.SUCCESS,
        listDynamo
      );
    } catch (error) {
      
      response = await genericFunctions.setResponse(
        CODES.SERVER_ERROR,
        STATUS_DESCRIPTION.ERROR,
        null
      );
    }
    return response;
  }

  /**
   * @name getSuperheroe
   * @description method for get a superheroe
   * @param id - id from the superheroe
   * @returns {Object}
   */
  public async getSuperheroe(id: string): Promise<any> {
    let response: any;
    try {
      let getItem: any = await operationsDB.getElement(
        DBConfigurations.superheroesTable,
        id
      );
      if(getItem==undefined){
        getItem = "Does not exist information for this user"
      }
      response = await genericFunctions.setResponse(
        CODES.SUCCESS,
        STATUS_DESCRIPTION.SUCCESS,
        getItem
      );
    } catch (error) {
      
      response = await genericFunctions.setResponse(
        CODES.SERVER_ERROR,
        STATUS_DESCRIPTION.ERROR,
        null
      );
    }
    return response;
  }

  /**
   * @name updateSuperheroes
   * @description method fot update a superhero
   * @param body
   * @returns {Object}
   */
  public async updateSuperheroes(body: any): Promise<any> {
    let response: any;
    try {
      const update: any = await operationsDB.updateElement(
        body,
        DBConfigurations.superheroesTable
      );
      response = await genericFunctions.setResponse(
        CODES.SUCCESS,
        STATUS_DESCRIPTION.SUCCESS,
        body
      );
    } catch (error) {
      response = await genericFunctions.setResponse(
        CODES.SERVER_ERROR,
        STATUS_DESCRIPTION.ERROR,
        null
      );
    }
    return response;
  }

  /**
   * @name deleteSuperheroe
   * @description method for deletele a superhero
   * @param id the id from the superheroe
   * @returns {Object}
   */
  public async deleteSuperheroe(id: string): Promise<any> {
    let response: any;
    try {
      const deleteSuperheroes: any = await operationsDB.deleteElement(
        DBConfigurations.superheroesTable,
        id
      );
      response = await genericFunctions.setResponse(
        CODES.SUCCESS,
        STATUS_DESCRIPTION.SUCCESS,
        id
      );
    } catch (error) {
      response = await genericFunctions.setResponse(
        CODES.SERVER_ERROR,
        STATUS_DESCRIPTION.ERROR,
        null
      );
    }
    return response;
  }
}

const heroes = new Superheroes();
export default heroes;
