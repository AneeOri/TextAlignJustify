import "./styles.css";

export default function App() {
  const justify235 = (text, width) =>
    text
      .match(new RegExp(`\\S.{0,${width - 2}}(?:\\S|$)(?=\\s|$)|^$`, "g"))
      .map(
        (
          line,
          idx,
          arr,
          w = width - line.length,
          l = line.split` `.length - 1,
          i = 0
        ) =>
          line.replace(
            /\s/g,
            () => " " + " ".repeat(arr[idx + 1] && ~~w / l + (i++ < w % l))
          )
      ).join`\n`;

  const justify987 = (text, width) => {
    let w, l;
    const words = text.split(/\s+/);

    const lines = words.reduce(
      (acc, word, idx) =>
        !(l = acc.length) || (acc[l - 1] + word).length >= width
          ? [...acc, word]
          : ((acc[l - 1] += ` ${word}`), acc),
      []
    );

    const spacedLines = lines.map(
      (line) =>
        line.split` `.map(
          (item, idx, arr) =>
            item +
            " ".repeat(
              ~~((w = width - line.length) / (l = arr.length - 1)) +
                1 +
                (idx < w % l)
            )
        ).join``
    );

    return spacedLines.join`\n`
      .replace(/\s+$/gm, "")
      .replace(/(?<=(?:\n|^).+) +(?=.+$)/g, " ");
  };

  function justify22(text, width) {
    let re = RegExp("(?:\\s|^)(.{1," + width + "})(?=\\s|$)", "g");
    let res = [];
    let finalResult = [];
    let m;

    while ((m = re.exec(text)) !== null) {
      res.push(m[1]);
    }

    for (let i = 0; i < res.length - 1; i++) {
      if (res[i].indexOf(" ") != -1) {
        while (res[i].length < width) {
          for (let j = 0; j < res[i].length - 1; j++) {
            if (res[i][j] == " ") {
              res[i] = res[i].substring(0, j) + " " + res[i].substring(j);
              if (res[i].length == width) break;
              while (res[i][j] == " ") j++;
            }
          }
        }
      }
      finalResult.push(res[i]);
    }

    finalResult.push(res[res.length - 1]);

    return finalResult.join("\n");
  }

  function justify77(str, len) {
    var words = str.split(" ");
    var lines = [];
    var lastLine = words.reduce(function (line, word) {
      if (line) {
        if (line.length + word.length + 1 <= len) return line + " " + word;
        lines.push(line);
      }
      return word;
    });
    lines = lines.map(function (line) {
      if (line.indexOf(" ") >= 0)
        for (var lineLen = line.length; lineLen < len; )
          line = line.replace(/ +/g, function (spaces) {
            return spaces + (lineLen++ < len ? " " : "");
          });
      return line;
    });
    lastLine && lines.push(lastLine);
    return lines.join("\n");
  }

  var justify99 = function (str, len) {
    return str
      .split(" ")
      .reduce((r, w, i, arr) => {
        let line = r.pop() || [];
        let lineLen = line.reduce(
          (k, v) => k + v.length,
          Math.max(0, line.length)
        );
        if (lineLen + w.length > len) {
          let index = 0;
          while (lineLen++ <= len && line.length > 1) {
            line[index] += " ";
            index = ++index % (line.length - 1);
          }
          r.push(line.join(" "), [w]);
        } else if (i === arr.length - 1) {
          r.push(line.concat(w).join(" "));
        } else {
          r.push(line.concat(w));
        }
        return r;
      }, [])
      .join("\n");
  };

  const LIPSUM =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.";
  console.log(justify22(LIPSUM, 30));
  return (
    <div className="App">
      <input />
    </div>
  );
}
