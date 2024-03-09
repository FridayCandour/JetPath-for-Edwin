import { AppCTX, JetPath, Schema } from "jetpath";

new JetPath({
  publicPath: { dir: "/node_modules", route: "/static" },
  displayRoutes: "UI",
  documentation: {
    name: "JetPath for Edwin",
    color: "#ff9800",
    info: "For lovely Edwin",
    logo: "https://cdn1.cdn-telegram.org/file/UiyWysKt4p85Rskb_CifctVKPUaYH_r6j7AmQ1E2ckAdphkEwnwLP0uqZ8Vzj7i_gVkU9cbOvcwfoWAYN2pVuTgBMUenWiw27PUqiSVt0SQfRpChCKN4jmGsP0l6wbEiHN_a5Z0YE06Yy4zg_nkx2qNeqWXqVMJmrTScfxuvrGFuexTRKpgGGF7Gy6haCaWAqtAr_eMk3fcAm-CnhXWv0i5w5T8IUGpN3LOJTXVrSt_3VjjrLVYW9bQBoj8uWUDvNRXoq3hB2WKlrk_3NOWPFKzetH9Q_v-11rTjFiN0QR9ll9vOCs__q3vVy3C32Yh-zRVbX6IlGpsCMn9rowrGzg.jpg",
  },
}).listen();

export function GET_api_v1$id(ctx: AppCTX) {
  ctx.send("1");
}
export function GET_api_v1_offers(ctx: AppCTX) {
  ctx.send("2");
}
export function GET_api_v1_offers$id(ctx: AppCTX) {
  ctx.send("3");
}
export function GET_api_v1_resources(ctx: AppCTX) {
  ctx.send("4");
}
export function GET_api_v1_resources$id(ctx: AppCTX) {
  ctx.send("5");
}
export function GET_api_v1_companies(ctx: AppCTX) {
  ctx.send("6");
}
export function GET_api_v1_companies$id(ctx: AppCTX) {
  ctx.send("7");
}
