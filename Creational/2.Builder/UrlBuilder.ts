import { Url } from "./Url";

export class UrlBuilder {
  private protocol: string | null = null;
  private username: string | null = null;
  private password: string | null = null;
  private hostname: string | null = null;
  private port: string | null = null;
  private pathname: string | null = null;
  private search: string | null = null;
  private hash: string | null = null;

  setProtocol(protocol: string): this {
    this.protocol = protocol;

    return this;
  }

  setAuthentication(username: string, password: string): this {
    this.username = username;
    this.password = password;

    return this;
  }

  setHostname(hostname: string): this {
    this.hostname = hostname;

    return this;
  }

  setPathname(port: string): this {
    this.port = port;

    return this;
  }

  setSearch(search: string): this {
    this.search = search;

    return this;
  }

  setHash(hash: string): this {
    this.hash = hash;

    return this;
  }

  build(): Url {
    return new Url(
      this.protocol,
      this.username,
      this.password,
      this.hostname,
      this.port,
      this.pathname,
      this.search,
      this.hash
    );
  }
}
