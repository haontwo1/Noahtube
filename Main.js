fetch("https://api.sheetbest.com/sheets/45296d18-ffb5-4821-9c29-eff13a3d4327", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    used_at: new Date().toISOString()
  })
});
if (window.location.hostname === "edpuzzle.com") {
  window.location.href = "https://www.youtube.com";
} else {
  alert("This code only works on \"edpuzzle.com\"");
}
