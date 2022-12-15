export const albumsCardClass = (albumLength: number) => {
  switch (albumLength) {
    case 1:
      return "col-sm-12";
    case 2:
      return "col-sm-6";
    case 3:
      return "col-sm-4";
    case 4:
      return "col-sm-4";
    case 5:
      return "col-sm-3";
    default:
      return "col-sm-3 col-md-3 col-lg-2";
  }
};
