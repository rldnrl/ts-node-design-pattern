export class Url {
  constructor(
    private protocol: string | null,
    private username: string | null,
    private password: string | null,
    private hostname: string | null,
    private port: string | null,
    private pathname: string | null,
    private search: string | null,
    private hash: string | null
  ) {}

  validate() {
    if (this.protocol || this.hostname) {
      throw new Error("protocol과 hostname은 명시해야합니다.");
    }
  }

  toString() {
    let url = "";
    url += `${this.protocol}://`;
    if (this.username && this.password) {
      url += `${this.username}:${this.password}@`;
    }
    url += this.hostname;
    if (this.port) {
      url += this.port;
    }
    if (this.pathname) {
      url += this.pathname;
    }
    if (this.search) {
      url += `?${this.search}`;
    }
    if (this.hash) {
      url += `#${this.hash}`;
    }
    return url;
  }
}
