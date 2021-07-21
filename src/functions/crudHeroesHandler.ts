import superheroes from "../controllers/superheroes/superheroes";
import { v4 as uuid_v4 } from "uuid";

/**
 * @name createHeroe
 * @description Lambda for create an heroe
 * @param event
 * @returns {Object}
 */
export async function createHeroe(event: any): Promise<any> {
  let body = JSON.parse(event.body);
  body.id = uuid_v4();
  console.log("body create--", body);
  let response: any = await superheroes.createSuperheroe(body);
  return response;
}

/**
 * @name listHeroes
 * @description Lambda for get all heroes
 * @returns {Object}
 */
export async function listHeroes(): Promise<any> {
  let response: any = await superheroes.listSuperheroes();
  return response;
}

/**
 * @name getHeroe
 * @description Lambda for get a heroe
 * @param body
 * @returns {Object}
 */
export async function getHeroe(body: any): Promise<any> {
  let id = body.pathParameters.id;
  console.log("id--", id);
  const response: any = await superheroes.getSuperheroe(id);
  return response;
}

/**
 * @name updateHeroe
 * @description method for update a heroe
 * @param event
 * @returns
 */
export async function updateHeroe(event: any): Promise<any> {
  let body = JSON.parse(event.body);
  console.log("body--", body);
  const response: any = await superheroes.updateSuperheroes(body);
  return response;
}

/**
 * @name deleteHeroe
 * @description Lambda for delete a heroe
 * @param event
 * @returns {Object}
 */
export async function deleteHeroe(event: any): Promise<any> {
  let id = event.pathParameters.id;
  console.log("id--", id);
  const response: any = await superheroes.deleteSuperheroe(id);
  return response;
}
