<div align="center">
  <img width="570" alt="Banner" src="https://user-images.githubusercontent.com/6417910/99180829-a8a1ae80-274f-11eb-9b19-ef8ed796bc83.png">
</div>

![CI](https://github.com/campvanilla/ditto/workflows/Unit%20Tests%20CI/badge.svg?branch=main&event=push) ![npm (scoped)](https://img.shields.io/npm/v/@campvanilla/ditto-cli?style=flat) ![GitHub](https://img.shields.io/github/license/campvanilla/ditto?color=yellow&style=flat) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## ditto

> A CLI tool to convert your VSCode theme to an iTerm2 theme. 🎨

![BannerGif](https://user-images.githubusercontent.com/6417910/99155780-1662c180-26e1-11eb-92b8-7ae6c2fb22a2.gif)

## Usage

### System requirements

- NodeJS 10+. The tool does work with NodeJS 8.x, but we do not officially support it.

Tested on macOS, Linux and Windows (via [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab))

### Running / Installation

We recommend using `npx` to run the CLI:-

```bash
npx @campvanilla/ditto-cli
```

Or, alternatively, install it globally via npm and then run:-

```bash
$ npm install -g @campvanilla/ditto-cli

$ ditto-cli
```

### Setting in iTerm2

Once an iterm color scheme file is generated, `Cmd + Click` on the _file name_ (with extension as `*.itermcolors`) in `iTerm2` to automatically import the preset into iTerm & then select the theme from preferences (`Cmd + i` → `Colors` tab → `Color Presets` → Select the generated color preset).

### Custom Options

<table>
  <thead>
    <tr>
      <th width='20%'>
        CLI Argument
      </th>
      <th width='10%'>
        Optional
      </th>
      <th width='45%'>
        Description
      </th>
      <th width='25%'>
        Default Value
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>--extensions-dir</td>
      <td>yes</td>
      <td>To specify the folder containing your VSCode extensions you've configured VSCode to save extensions in a custom directory</td>
      <td>
        <p>Mac: ~/.vscode/extensions</p>
        <p>Linux: ~/.vscode/extensions</p>
        <p>Windows: C:/Users/{currentUser}/.vscode/extensions</p>
      </td>
    </tr>
    <tr>
      <td>--out-dir</td>
      <td>yes</td>
      <td>To specify the folder to which the iTerm2 theme file will be written</td>
      <td>The current working directory</td>
    </tr>
    <tr>
      <td>--verbose</td>
      <td>yes</td>
      <td>Execute cli with verbose output</td>
      <td>false</td>
    </tr>
    <tr>
      <td>--dry-run</td>
      <td>yes</td>
      <td>Execute script without writing final iTerm2 theme to disk</td>
      <td>false</td>
    </tr>
    <tr>
      <td>--help</td>
      <td>yes</td>
      <td>Provides documentation</td>
      <td>-</td>
    </tr>
  </tbody>
</table>


## Development

1. Clone the project

```
$ git clone https://github.com/campvanilla/ditto.git
```

1. Install dependencies

```
$ npm install
```

1. To test the changes to the tool, create a local build of the project

```
$ npm link
```

This should add the `ditto-cli` command to terminal.

```
$ ditto-cli
```


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://aditimohanty.com"><img src="https://avatars3.githubusercontent.com/u/6426069?v=4" width="100px;" alt=""/><br /><sub><b>Aditi Mohanty</b></sub></a><br /><a href="#ideas-rheaditi" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/campvanilla/ditto/commits?author=rheaditi" title="Code">💻</a> <a href="#maintenance-rheaditi" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://abinavseelan.com"><img src="https://avatars2.githubusercontent.com/u/6417910?v=4" width="100px;" alt=""/><br /><sub><b>Abinav Seelan</b></sub></a><br /><a href="https://github.com/campvanilla/ditto/commits?author=abinavseelan" title="Code">💻</a> <a href="#maintenance-abinavseelan" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
