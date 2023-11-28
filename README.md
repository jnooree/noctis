<p align="center">
   <img width="170" src="/images/logo.png" />
</p>

<p align="center">
   <img width="400" src="/images/noctisLogo.png" />
</p>

Semantic Noctis is a collection of light & dark themes with a well balanced
blend of warm and cold **medium contrast** colors.

The theme is designed to:

- be easy on the eyes thus reducing the eye strain
- give semantic meaning to theme's colors

Semantic Noctis comes in 2 versions, 1 is dark and 1 is light.

- _Semantic Noctis Minimus'_ background offers a version of the _Azureus_
  palette with **much lower saturation**.
  (Thank you [Draevin](https://github.com/draevin) for your
  [contribution](https://github.com/liviuschera/noctis/pull/10))
- _Semantic Noctis Lux'_ background is a very saturated very light warm orange

This version has some changes to the original Noctis theme:

- Supports semantic highlighting.
- Some colors are updated to be more distinguishable.
- Workbench colors are adjusted to reduce confusion.

The screenshots below are taken from the upstream repository, so might not
reflect the current state of this theme.

<div align="center">

---

> ## The font used in screenshots is called [Cartograph CF](http://connary.com/cartograph.html)

---

## Noctis Minimus

![Noctis Minimus Screenshot](/images/noctisMinimus.png)

## Noctis Lux

![Noctis Lux Screenshot](/images/noctisLux.png)

</div>

## Supported Languages

The semantic highlighting is only supported for (read: I only use) the following
languages, in order of priority:

- C/C++ (Requires [clangd](https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd))
- CMake (Requires [CMake Language Support](https://marketplace.visualstudio.com/items?itemName=josetr.cmake-language-support-vscode))
- Python (Requires [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance))
- Shell Script (Requires [New Syntax Highlighter](https://marketplace.visualstudio.com/items?itemName=fallenwood.syntax-highlighter-ng))
- TOML (Requires [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml)), but with limited support (I rarely use TOML).

Yes, I'm a C/C++ developer:tm:. I use more languages, but most of them have no
extensions providing semantic tokens so no semantic highlighting is provided for
them (yet). The syntax colors might be updated to be more distinguishable,
though. Below are some of them I regularly use (not exhaustive):

- Markdown (I use [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one))
- LaTeX (I use [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop))
- YAML (I use [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml))
- JSON

All other languages are not supported; only upstream changes will be pulled in.

## Syntax colors

If interested, see [the source code](src/colors.mjs) for the colors used in
the syntax/semantic highlighting.

## Installation

Search for "Semantic Noctis" in the Marketplace.

## Credits

This is a fork of [Noctis](https://github.com/liviuschera/noctis) by
[Liviu Schera](https://github.com/liviuschera). Most of the credits go to the
original author and contributors.

## License

[MIT License](LICENSE.md)
