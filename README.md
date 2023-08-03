# Zotero File

> 让 ZotFile 在 Zotero 7 继续使用

<img src="addon/chrome/content/icons/favicon.png" width="36px" height="36px">

[![Using Zotero Plugin Template](http://img.shields.io/badge/Using-Zotero%20Plugin%20Template-blue?style=flat-round&logo=github)](https://github.com/windingwind/zotero-plugin-template)
[![Latest release](http://img.shields.io/github/v/release/MuiseDestiny/zotero-file)](https://github.com/MuiseDestiny/zotero-file/releases)
![Release Date](http://img.shields.io/github/release-date/MuiseDestiny/zotero-file?color=9cf)
[![License](http://img.shields.io/github/license/MuiseDestiny/zotero-file)](https://github.com/MuiseDestiny/zotero-file/blob/master/LICENSE)
![Downloads latest release](http://img.shields.io/github/downloads/MuiseDestiny/zotero-file/latest/total?color=yellow)


## How to use?

1. Download the latest released [xpi file](https://github.com/muisedestiny/zotero-file/releases/latest/download/zotero-file.xpi)
2. In Zotero 7, go to `Tools` -> `Add-ons` -> drag the xpi file to a new open window

## Note

This plugin based on [@jlegewie](https://github.com/jlegewie) 的 [ZotFile](https://github.com/jlegewie/zotfile) . Because [author stated](https://github.com/jlegewie/zotfile/issues/655#issuecomment-1595364307) that zotero 7 will not be adapted.

A big thank you to the author @jlegewie for writing such a great plugin. The light of this code should not dim with the Zotero upgrade. This plugin will allow ZotFile to continue to shine.

A big thank you to [@windingwind](https://github.com/windingwind) for making the implementation of this plugin simple and efficient based on @windingwind's [plugin template](https://github.com/windingwind/zotero-plugin-template). It makes the implementation of this plugin simple and efficient.

This plugin will gradually migrate the core functionality of ZotFile (tablet sync not included), if you like this project, welcome ⭐Star.

## Attention

If you are a `Zotero 6 + ZotFile` user and install this plugin after upgrading `Zotero 7`, you don't need to reset it. This is because `Zotero File` reads all your `Zotero 6 + ZotFile` configuration of `ZotFile`.

You can switch between Zotero 6 and 7 seamlessly.

## TODO

Let ZotFile continue to shine by making the core ZotFile functionality work in Zotero 7!

## Done

- [x] Automatic renaming
- [x] Automatically move attachments
- [x] Setup screen

## Preview

![image](https://github.com/MuiseDestiny/zotero-file/assets/51939531/85988b3a-e626-4418-8d61-1a7d37431ae7)

![image](https://github.com/MuiseDestiny/zotero-file/assets/51939531/03018858-5f38-44ca-b5dc-0024d6d96143)

![image](https://github.com/MuiseDestiny/zotero-file/assets/51939531/cf078acb-6f5b-4fc1-b1ab-5677a9c75257)

![image](https://github.com/MuiseDestiny/zotero-file/assets/51939531/9c7a3be2-6776-448d-94f8-adf28559e3a3)

## Donate

<img src="http://user-images.githubusercontent.com/51939531/227145474-ca165a93-fcf2-4b47-baf4-ea6b29f43d99.png" width="50%" height="50%">

感谢[@leichaoL](https://github.com/leichaoL)、[@JOJOdioJosita](https://github.com/JOJOdioJosita)、@小陈、[@YangChunyu1999](https://github.com/YangChunyu1999)、[@遍一认着倒要少至你赌我](https://b23.tv/JjHR5ON)、[@Eunsolfs](https://github.com/Eunsolfs)以及一些匿名赞助的朋友们，也感谢很治愈的留言

---

**Here is the original ZotFile reame**

# ZotFile: Advanced PDF management for Zotero


### Joscha Legewie

Zotfile is a Zotero plugin to manage your attachments: automatically rename, move, and attach PDFs (or other files) to Zotero items, sync PDFs from your Zotero library to your (mobile) PDF reader (e.g. an iPad, Android tablet, etc.) and extract annotations from PDF files.

Detailed information are available from the [zotfile website](http://www.zotfile.com).

## Development status

Zotfile is currently not actively developed and maintained! Updates are extremely rare and I will mostly not respond to issues and pull requests here on github.

## Installation

For _Zotero 5_, first download the extension file (follow the download link above, click on the .xpi file for the most recent release). Now start Zotero 5 and go to "Tool -> Add-ons -> Tools for all Add-ons (the small, drop-down wheel in the top right corner) -> Install Add-on From File" and select the downloaded .xpi file. For _Zotero 4.x_, the process is different for Zotero for Firefox and Zotero Standalone. For Zotero 4.x Firefox, go to the [Mozilla Add-Ons page](https://addons.mozilla.org/en-us/firefox/addon/zotfile/) and follow the instructions. For Zotero 4.x Standalone, use the same steps as for Zotero 5 but download the .xpi file from [here](https://addons.mozilla.org/firefox/downloads/file/585224/zotfile-4.2.8-fx.xpi?src=dp-btn-primary)

To install the **development version** on github:

1. download `.zip` file from github
2. extract `.zip` file
3. recreate `.zip` file containing all the files at the top level, i.e.,
   install.rdf and the chrome directory need to be at the root of the .zip file
   and not under zotfile/
4. rename the file to `.xpi`
5. Install

- For zotero firefox: drag & drop on firefox
- For zotero standalone: In Zotero Standalone go to 'Tools->Add-ons->Tools for all Add-ons (the small, drop-down wheel menu next to the 'Search all Add-ons' box)->Install Add-on From File' and pick the .xpi file.

For Linux, Mac OS X or Cygwin users, there is a `Makefile` which takes care of creating the `.xpi` file.
Simply run `make` instead of steps 3 and 4 above.

## Extraction of PDF Annotations

Zotfile can extracted annotations and highlighted text from many PDF files. But it will never be able to handle all files. If you can not copy & paste meaningful text from the file in your pdf viewer (open your pdf viewer (not the browser plugin), select text, copy and paste it somewhere), zotfile won't be able to extract the highlighted text either. If you can, there is a chance that future versions of zotfile will solve the problem. In general, these files depend on the pdf standards supported by pdf.js, which is the pdf library used by zotfile to extract annotations.

## License

The source code is released under GNU General Public License, version 3.0

Contributions preferably through pull requests are welcome!

## Changelog

The full changelog is available [here](http://zotfile.com/#changelog).
