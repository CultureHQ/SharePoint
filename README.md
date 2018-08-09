# SharePoint

[![Build Status](https://travis-ci.com/CultureHQ/SharePoint.svg?token=kQUiABmGkzyHdJdMnCnv&branch=master)](https://travis-ci.com/CultureHQ/SharePoint)

CultureHQ's SharePoint add-in.

## Getting started

Ensure you have `node` and `npm` installed. Note that SharePoint only supports up to `node` v6, so you'll need to make sure that's your active `node` version. If you need to handle installing multiple, try using `nvm`.

In the root of the directory, run `npm install` to install the necessary dependencies. You can then run `npm run serve` to start a local workbench server with which you can work on the add-in. Note that on Mac, the default page that this command opens does not work, and you will need to instead open the generated `temp/workbench.html` file and refresh when changes are made.

## Deployment

Run `npm run package` in the root directory. This will create two things:

* `sharepoint/solution/culture-hq.sppkg` - can be sent to clients to import into their app catalogue (https://support.office.com/en-us/article/use-the-app-catalog-to-make-custom-business-apps-available-for-your-sharepoint-online-environment-0b6ab336-8b83-423f-a06b-bcc52861cba0).
* `temp/deploy` - a directory containing the necessary async assets that will be requested by the package. These should be deployed to our `sharepoint.culturehq.com` CDN.

They can then load the `Upcoming Events` webpart onto a SharePoint page and configure it appropriately.
