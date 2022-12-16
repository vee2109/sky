export const albumsCardClass = (albumLength: number) => {
  switch (albumLength) {
    case 1:
      return "p0 col-sm-12";
    case 2:
      return "p0 col-sm-6";
    case 3:
      return "p0 col-sm-4";
    case 4:
      return "p0 col-sm-4";
    case 5:
      return "p0 col-sm-3";
    default:
      return "p0 col-sm-6 col-md-4 col-lg-3 col-xs-6";
  }
};
