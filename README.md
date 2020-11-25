Takahashi Slideshow Viewer
===

A page that fetches a text file from a user-provided URL and presents it as a [Takahashi method slideshow](https://en.wikipedia.org/wiki/Takahashi_method). See the [demo](https://kodanbce.github.io/takahashi/?url=https://kodanbce.github.io/takahashi/demo-presentation.txt) to see it in action.

How to Use
---

Just drop `index.html` to your server or host it in AWS S3 or serve it manually with `python3 -m http.server`. The source URL for the text is provided as a query parameter like `?url=[URL to plaintext]`.

How to Use in a Hurry
---

Save your plaintext presentation in the root of this repo as `presentation.txt`. Whip up a web server with `python3 -m http.server` while in the root. Navigate [here](http://localhost:8000?url=http://localhost:8000/presentation.txt) and you should see your presentation.

How to Use without a CLI
---

Write your presentation using an online notepad. One option is https://edit.sunfox.org/insert-presentation-title-here that lets you read the plaintext version of the document by appending `.txt` to the URL. Then, you can turn it into a Takahashi presentation with https://kodanbce.github.io/takahashi/ and a CORS proxy. So, https://kodanbce.github.io/takahashi/?url=https://cors-anywhere.herokuapp.com/https://edit.sunfox.org/insert-presentation-title-here.txt.

Demo
---

[See here](https://kodanbce.github.io/takahashi/?url=https://kodanbce.github.io/takahashi/demo-presentation.txt). The source for the demo is in this repo in the file `demo-presentation.txt`.

License
---

MIT
