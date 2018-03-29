# SharePoint

[![Build Status](https://travis-ci.com/CultureHQ/SharePoint.svg?token=kQUiABmGkzyHdJdMnCnv&branch=master)](https://travis-ci.com/CultureHQ/SharePoint)

CultureHQ's SharePoint add-in.

## Getting started

Ensure you have `node` and `npm` installed. Note that SharePoint only supports up to `node` v6, so you'll need to make sure that's your active `node` version. If you need to handle installing multiple, try using `nvm`.

In the root of the directory, run `npm install` to install the necessary dependencies. You can then run `npm run serve` to start a local workbench server with which you can work on the add-in. Note that on Mac, the default page that this command opens does not work, and you will need to instead open the generated `workbench.html` file in the `temp` directory and refresh when changes are made.
