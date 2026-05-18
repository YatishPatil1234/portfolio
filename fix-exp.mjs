import fs from "fs";
const p = "src/components/Experience.jsx";
let s = fs.readFileSync(p, "utf8");
const open = "div";
const close = "</" + open + ">";
s = s.replace(
  /(<div className="experience-header-main">[\s\S]*?<\/div>)\s*<\/motion\.div>(\s*<p className="experience-date">)/,
  `$1${close}$2`
);
fs.writeFileSync(p, s);
console.log("done");
