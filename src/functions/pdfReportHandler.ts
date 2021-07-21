import pdfReport from '../controllers/pdfReport/pdfReport';

/**
 * @name pdfHeroesReports
 * @description Method for generate the pdf report
 * @returns Object
 */
export async function pdfHeroesReports():Promise<any>{
    let response:any = await pdfReport.generateHeroesPdfReport();
    return response;
}