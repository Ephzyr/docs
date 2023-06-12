import type { NavbarConfig } from "vuepress-theme-hope";

export const enNavbarConfig: NavbarConfig = [
  "/",
  {
    text: "Demo",
    icon: "discover",
    link: "/demo/",
  },
  {
    text: "Guide",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: [
          "baz",
          {
            text: "...",
            icon: "more",
            link: ""
          },
        ],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: [
          "ray",
          {
            text: "...",
            icon: "more",
            link: ""
          },
        ],
      },
    ],
  },
  {
    text: "V2 Docs",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/",
  },
];
