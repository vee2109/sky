export const albumsStyles = {
    cards: {
        display: "flex",
        alignItems: "flex-start",
          justifyContent: "center",
      },
      
      card: {
        background: "#fff",
        width: "24em",
        borderRadius: "0.6em",
        margin: "1em",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
        transition: "all ease 200ms",
        ":hover": {
            transform: "scale(1.03)",
            boxShadow: "0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)",
          },
          "img": {
            width: "100%",
            objectFit: "cover",
          },
          "h2": {
            color: "#222",
            marginTop: "-0.2em",
            lineHeight: "1.4",
            fontSize: "1.3em",
            fontWeight: "500",
            fontFamily: "'Montserrat', sans-serif",
            transition: "all ease-in 100ms",
          },
          "p": {
            color: "#777",
          },
          "h5": {
            color: "#bbb",
            fontWeight: "700",
            fontSize: "0.7em",
            letterSpacing: "0.04em",
            margin: "1.4em 0 0 0",
            textTransform: "uppercase",
          }
      },
      cardBody: {
        padding: "1.2em",
      }
    }