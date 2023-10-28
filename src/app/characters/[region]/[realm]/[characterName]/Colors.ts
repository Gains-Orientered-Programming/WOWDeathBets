export const levelColors = (level: number) => {
  if (level < 10) {
    return {
      color: "#616161",
      backgroundColor: "#eeeeee",
    }; // gray
  } else if (level < 20 && level >= 10) {
    return {
      color: "#fafafa",
      backgroundColor: "#ffffff",
    }; // white
  } else if (level < 30 && level >= 20) {
    return {
      color: "#388e3c",
      backgroundColor: "#a5d6a7",
    }; // green
  } else if (level < 40 && level >= 30) {
    return {
      color: "#1976d2",
      backgroundColor: "#90caf9",
    }; // blue
  } else if (level < 50 && level >= 40) {
    return {
      color: "#7b1fa2",
      backgroundColor: "#ce93d8",
    }; // purple
  } else if (level < 60 && level >= 50) {
    return {
      color: "#ff6f00",
      backgroundColor: "#ffcc80",
    }; // orange
  } else if (level === 60) {
    return {
      color: "#fbc02d",
      backgroundColor: "#fff59d",
    }; // gold
  }
};
