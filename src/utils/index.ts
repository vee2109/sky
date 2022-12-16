export const albumsCardClass = (albumLength: number) => {
  switch (albumLength) {
    case 1:
      return "p0 col-sm-12";
    case 2:
      return "p0 col-sm-6";
    case 3:
      return "p0 col-sm-4";
    case 4:
      return "p0 col-sm-3";
    case 5:
      return "p0 col-sm-3";
    default:
      return "p0 col-sm-6 col-md-3 col-lg-2 col-xs-6";
  }
};
