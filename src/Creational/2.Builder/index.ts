import { UrlBuilder } from "./UrlBuilder";

const url = new UrlBuilder()
  .setProtocol("https")
  .setAuthentication("user", "password")
  .setHostname("example.com")
  .build();

console.log(url.toString());
