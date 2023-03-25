oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli-style
$ cli-style COMMAND
running command...
$ cli-style (--version)
cli-style/0.0.0 darwin-x64 node-v19.8.1
$ cli-style --help [COMMAND]
USAGE
  $ cli-style COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cli-style hello PERSON`](#cli-style-hello-person)
* [`cli-style hello world`](#cli-style-hello-world)
* [`cli-style help [COMMANDS]`](#cli-style-help-commands)
* [`cli-style plugins`](#cli-style-plugins)
* [`cli-style plugins:install PLUGIN...`](#cli-style-pluginsinstall-plugin)
* [`cli-style plugins:inspect PLUGIN...`](#cli-style-pluginsinspect-plugin)
* [`cli-style plugins:install PLUGIN...`](#cli-style-pluginsinstall-plugin-1)
* [`cli-style plugins:link PLUGIN`](#cli-style-pluginslink-plugin)
* [`cli-style plugins:uninstall PLUGIN...`](#cli-style-pluginsuninstall-plugin)
* [`cli-style plugins:uninstall PLUGIN...`](#cli-style-pluginsuninstall-plugin-1)
* [`cli-style plugins:uninstall PLUGIN...`](#cli-style-pluginsuninstall-plugin-2)
* [`cli-style plugins update`](#cli-style-plugins-update)

## `cli-style hello PERSON`

Say hello

```
USAGE
  $ cli-style hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/Cerchie/cli-style/blob/v0.0.0/dist/commands/hello/index.ts)_

## `cli-style hello world`

Say hello world

```
USAGE
  $ cli-style hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ cli-style hello world
  hello world! (./src/commands/hello/world.ts)
```

## `cli-style help [COMMANDS]`

Display help for cli-style.

```
USAGE
  $ cli-style help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cli-style.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.8/src/commands/help.ts)_

## `cli-style plugins`

List installed plugins.

```
USAGE
  $ cli-style plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cli-style plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.3/src/commands/plugins/index.ts)_

## `cli-style plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cli-style plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cli-style plugins add

EXAMPLES
  $ cli-style plugins:install myplugin 

  $ cli-style plugins:install https://github.com/someuser/someplugin

  $ cli-style plugins:install someuser/someplugin
```

## `cli-style plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cli-style plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ cli-style plugins:inspect myplugin
```

## `cli-style plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cli-style plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cli-style plugins add

EXAMPLES
  $ cli-style plugins:install myplugin 

  $ cli-style plugins:install https://github.com/someuser/someplugin

  $ cli-style plugins:install someuser/someplugin
```

## `cli-style plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ cli-style plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ cli-style plugins:link myplugin
```

## `cli-style plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cli-style plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cli-style plugins unlink
  $ cli-style plugins remove
```

## `cli-style plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cli-style plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cli-style plugins unlink
  $ cli-style plugins remove
```

## `cli-style plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cli-style plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cli-style plugins unlink
  $ cli-style plugins remove
```

## `cli-style plugins update`

Update installed plugins.

```
USAGE
  $ cli-style plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
