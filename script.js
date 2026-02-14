const BASE_URL = window.location.origin;
const contactURL = `${BASE_URL}/business-card/card.vcf`;

const data = {
  name: "Erika Matesz Bueno",
  role: "Developer & Data Scientist",
  organization: "The Climate Loop Project",
  phone: "+55 21 99966-5122",
  email: "ecmateszbueno@gmail.com",
  links: [
    "linkedin.com/in/mateszbueno",
    "github.com/erikamatesz",
    "github.com/climateloop"
  ]
};

function syntaxHighlight(json) {
  json = JSON.stringify(json, null, 2);
  json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|\b\d+\b)/g,
    function (match) {
      let cls = "number";
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "key";
        } else {
          cls = "string";
        }
      } else if (/true|false/.test(match)) {
        cls = "boolean";
      } else if (/null/.test(match)) {
        cls = "null";
      }
      return `<span class="${cls}">${match}</span>`;
    }
  );
}

document.getElementById("jsonContent").innerHTML = syntaxHighlight(data);

new QRCode(document.getElementById("qrcode"), {
  text: contactURL,
  width: 140,
  height: 140,
  colorDark: "#ffffff",
  colorLight: "#1e1e1e",
  correctLevel: QRCode.CorrectLevel.H
});
