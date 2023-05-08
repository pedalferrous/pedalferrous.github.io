# may: a smaller, sister site

## notes on style and todo
- Jekyll cheat sheet [here](https://gist.github.com/JJediny/a466eed62cee30ad45e2)
- We should add links to both journal articles and PDFs, through arxiv
- Where possible, we should also link to presentations and expositions
- Include a sharper mission statement, like the types of problems that this mode of inquiry addresses. E.g., understanding how to control subsystem dynamics through resolution of these problems to the properties of Lie groups and the induced Fourier theory. Leveraging results in representation theory to identify how fundamental properties and objects in linear algebra can be manipulated, and how such manipulations can be combined in a modular, formal sense to constitute complex transformations of quantum information.

## notes on jekyll styling
- Can link to other posts internally with `[Name of Link]({% post_url 2010-07-21-name-of-post %})`

## notes on build
- Local testing with `bundle exec jekyll serve`, run with `--drafts` option to see drafts
- Run `bundle install` following any updates to the `Gemfile`, then build as usual
- Gem `webrick` added for compatibility with Ruby version
- Theme loading changed to `gem "minima", github: "jekyll/minima"` for compatibility, see [here](https://github.com/jekyll/minima/issues/472)
- For figures, use `-fig Figure text. fig-![image-title](/assets/img/img_name.jpg)` followed by `{: .right-para }` on new line
- For sidenotes, use `~~` strikethrough without surrounding space
- Can change syntax highlighting of markdown in `PackageResourceViewer`