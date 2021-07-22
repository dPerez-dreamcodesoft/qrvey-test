import superheroes from "../controllers/superheroes/superheroes";
import { v4 as uuid_v4 } from "uuid";

/**
 * @name createSuperheroe
 * @description Lambda for create an superheroe
 * @param event
 * @returns {Object}
 */
export async function createSuperheroe(event: any): Promise<any> {
  let body = JSON.parse(event.body);
  body.id = uuid_v4();
  let response: any = await superheroes.createSuperheroe(body);
  return response;
}

/**
 * @name listSuperheroes
 * @description Lambda for get all the superheroes
 * @returns {Object}
 */
export async function listSuperheroes(): Promise<any> {
  let response: any = await superheroes.listSuperheroes();
  return response;
}

/**
 * @name getSuperheroe
 * @description Lambda for get a superheroe
 * @param body
 * @returns {Object}
 */
export async function getSuperheroe(body: any): Promise<any> {
  let id = body.pathParameters.id;
  const response: any = await superheroes.getSuperheroe(id);
  return response;
}

/**
 * @name updateSuperheroe
 * @description method for update a superheroe
 * @param event
 * @returns
 */
export async function updateSuperheroe(event: any): Promise<any> {
  let body = JSON.parse(event.body);
  const response: any = await superheroes.updateSuperheroes(body);
  return response;
}

/**
 * @name deleteSuperheroe
 * @description Lambda for delete a superheroe
 * @param event
 * @returns {Object}
 */
export async function deleteSuperheroe(event: any): Promise<any> {
  let id = event.pathParameters.id;
  const response: any = await superheroes.deleteSuperheroe(id);
  return response;
}
