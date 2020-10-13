import puppeteer, { PDFOptions } from "puppeteer";
declare function pdf(file: string, options?: PDFOptions): Promise<Uint8Array>;
declare function pdfPage(page: puppeteer.Page, options?: PDFOptions): Promise<Uint8Array>;
export { pdf, pdfPage };
