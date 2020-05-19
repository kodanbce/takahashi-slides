Takahashi Slideshow Viewer
===

A page that fetches a text file from a user-provided URL and presents it as a [Takahashi method slideshow](https://en.wikipedia.org/wiki/Takahashi_method). See the [demo](https://kodanbce.github.io/takahashi/index.html?sourceUrl=https://kodanbce.github.io/takahashi/demo-presentation.txt) to see it in action.

How to Use
---

Just drop `index.html`, `takahashi.css` and `takahashi.js` to your server or host them in AWS S3 or serve them manually with `python3 -m http.server`. The source URL for the text is provided as a query parameter like `?sourceUrl=[URL to plaintext]`.

How to Use in a Hurry
---

Save your plaintext presentation in the root of this repo as `presentation.txt`. Whip up a web server with `python3 -m http.server` while in the root. Navigate [here](http://localhost:8000?sourceUrl=http://localhost:8000/presentation.txt) and you should see your presentation.

Demo
---

[See here](https://kodanbce.github.io/takahashi/index.html?sourceUrl=https://kodanbce.github.io/takahashi/demo-presentation.txt). The source for the demo is in this repo in the file `demo-presentation.txt`.

License
---

MIT
