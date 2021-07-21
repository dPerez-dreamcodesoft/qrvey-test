import json2csv from "json-2-csv";
import superheroes from "../superheroes/superheroes";
import s3Controller from "../s3/s3Controller";
import {
  ExtensionFiles,
  CODES,
  STATUS_DESCRIPTION,
} from "../../config/settings";
import genericFunctions from "../../utils/genericResponse";

/**
 * @name ExcelReport
 * @description class for generate the excel report with a csv output
 */
class ExcelReport {
  /**
   * @name generateSuperheroesExcelReport
   * @description this is a method for get all data and create a csv report
   * @returns String with the url with the report
   */
  public async generateSuperheroesExcelReport(): Promise<any> {
    let body: any = {};
    let response: any = await genericFunctions.setResponse(CODES.SUCCESS,STATUS_DESCRIPTION.SUCCESS,null);
    try {
      const allData: any = await superheroes.listSuperheroes();
      let dataJson = JSON.parse(allData.body)
      if (dataJson.body != null && dataJson.body.length > 0) {
        const csv = await json2csv.json2csvAsync(dataJson.body);
        let url: string = await s3Controller.uploadFile(
          csv,
          ExtensionFiles.CSV
        );
        
        if (url) {
          body = { url: url };
          response = await genericFunctions.setResponse(
            CODES.SUCCESS,
            STATUS_DESCRIPTION.SUCCESS,
            body
          );
        } else {
          response = await genericFunctions.setResponse(
            CODES.SERVER_ERROR,
            STATUS_DESCRIPTION.ERROR,
            null
          );
        }
      }
    } catch (error) {
      console.log("error",error)
      response = await genericFunctions.setResponse(
        CODES.SERVER_ERROR,
        STATUS_DESCRIPTION.ERROR,
        null
      );
    }
    return response;
  }
}

const csvReports = new ExcelReport();
export default csvReports;
