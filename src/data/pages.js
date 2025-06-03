const pages = {
  home: () => "/",
  aboutus: () => "/aboutus",
  list: () => "/list",
  detail: (id = ":id") => `/comics/${id}`,
};

export default pages;
