<p align="center">
  <a href="https://github.com:ohthepain/action-install-aws-cli"><img alt="GitHub Actions status" src="https://github.com/ohthepain/action-install-aws-cli/workflows/master%20builds/badge.svg"></a>
</p>

# action-js-example

Example of how to write a GitHub Action in Javascript based on the steps here: https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action

## Supported Platforms
- windows-latest
- macos-latest
- ubuntu-latest

To considering adding: ubuntu-16.04, windows-2016, windows-2019, macOS-10.14, ubuntu-18.04

## Usage

Example
````yaml
name: Test example action

on: [push]

jobs:
  hello_world:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - uses: actions/checkout@v2
      - name: Hello world action step
        id: hello
        uses: ohthepain/action-js-example@v1.0
        with:
          who-to-greet: 'Mona Foo'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
````

