import excelReport from "../controllers/excelReport/excelReport";

/**
 * @name excelSuperheroesReport
 * @description function for generate the excel report in csv format
 */
export async function excelSuperheroesReport(): Promise<any> {
    let response:any = await excelReport.generateSuperheroesExcelReport();
    return response;
}
