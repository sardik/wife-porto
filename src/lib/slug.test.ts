import { describe, expect, it } from "vitest";

import { slugify } from "./slug";

describe("slugify", () => {
  it("mengubah spasi menjadi dash", () => {
    expect(slugify("A Bit About Me")).toBe("a-bit-about-me");
  });

  it("menghapus simbol dan merapikan dash", () => {
    expect(slugify("  Hello, World!!!  ")).toBe("hello-world");
  });
});
