import figlet from "figlet";

figlet.text(
  "Node.js Rules!",
  {
    font: "Acrobatic",
    horizontalLayout: "fitted",
    verticalLayout: "default",
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong.");
      return;
    }
    console.log(data);
  }
);
