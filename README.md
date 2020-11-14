![GithubBanner](https://user-images.githubusercontent.com/6417910/99155541-bcf99300-26de-11eb-893b-c7c24f5a24b2.png)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## ditto

> A CLI tool to convert your VSCode theme to an iTerm2 theme. 🎨

![BannerGif](https://user-images.githubusercontent.com/6417910/99155780-1662c180-26e1-11eb-92b8-7ae6c2fb22a2.gif)

## Usage


### System requirements

- NodeJS 10+. The tool does work with NodeJS 8.x, but we do not officially support it.

### Installation

We recommend executing this via `npx` as this tool would be used rather infrequently

```
$ npx @campvanilla/ditto-cli
```

If you do want to install this tool to your machine, do install it globally

```
$ npm install -g @campvanilla/ditto-cli

$ ditto-cli
```

**Recommendation:** Since the usage of this cli is probably infrequent, we recommend using `npx` to run the cli rather than installing the package globally

### Custom Options

| CLI Argument    | Optional | Details                                                                                                                   | Default Value               |   |
|-----------------|----------|---------------------------------------------------------------------------------------------------------------------------|-----------------------|---|
| --extensionsDir | yes      | To specify the folder containing your VSCode extensions you've configured VSCode to save extensions in a custom directory | ~/.vscode/extensions  |   |
| --outDir        | yes      | To specify the folder to which the iTerm2 theme file will be written                                                      | The current directory |   |
| --help          | yes      | Provides documentation                                                                                                    | -                     |   |


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
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!