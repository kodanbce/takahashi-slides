takahashi-slides
===

Single-file [Takahashi method slideshow](https://en.wikipedia.org/wiki/Takahashi_method) viewer

Usage
---

You can provide the slides either as an embedded plaintext file or by referring to a remote file by its URL.

The plaintext slides file should contain one slide per line. Empty lines are skipped altogether. If you want to have an empty slide, just do `\n` on a line on its own.

To use the embedded file, open `index.html` in an editor and edit the `#presentation` element. Then open `index.html` in a browser to see the presentation.

To use to a remote file, open `index.html` in a browser and add `?url=[remote_file]` to the URL.

To use dark mode, add `?dark=true` to the URL.

Demo
---

[See here](https://kodanbce.github.io/takahashi-slides/)

License
---

MIT
