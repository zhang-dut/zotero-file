/* eslint-disable no-undef */
pref("extensions.zotero.__addonRef__.enable", true);
pref("extensions.zotfile.debug", true);
pref("extensions.zotfile.source_dir_ff", false);
pref("extensions.zotfile.source_dir", "D:\\Download");
pref("extensions.zotfile.dest_dir", "");
pref("extensions.zotfile.filetypes", "pdf,doc,docx,txt,rtf,djvu,epub,html");
pref("extensions.zotfile.useFileTypes", true);
pref("extensions.zotfile.allFiles", false);
pref("extensions.zotfile.useZoteroToRename", false);
pref("extensions.zotfile.renameFormat", "{%a_}{%y_}{%t}");
pref("extensions.zotfile.renameFormat_patent", "{%a_}{%y_}{%t}");
pref("extensions.zotfile.truncate_title", true);
pref("extensions.zotfile.truncate_smart", true);
pref("extensions.zotfile.truncate_title_max", true);
pref("extensions.zotfile.max_titlelength", 80);
pref("extensions.zotfile.truncate_authors", true);
pref("extensions.zotfile.max_authors", 2);
pref("extensions.zotfile.number_truncate_authors", 1);
pref("extensions.zotfile.add_etal", true);
pref("extensions.zotfile.etal", " et al");
pref("extensions.zotfile.zotero7transition", false);
pref("extensions.zotfile.authors_delimiter", "_");
pref("extensions.zotfile.removeDiacritics", false);
pref("extensions.zotfile.removePeriods", false);
pref("extensions.zotfile.confirmation", true);
pref("extensions.zotfile.confirmation_batch_ask", true);
pref("extensions.zotfile.confirmation_batch", 2);
pref("extensions.zotfile.import", false);
pref("extensions.zotfile.watch_folder", true);
//pref("extensions.zotfile.watch_folder_list", '["source_dir"]');
pref("extensions.zotfile.automatic_renaming", 3);
pref("extensions.zotfile.disable_renaming", false);
pref("extensions.zotfile.replace_blanks", false);
pref("extensions.zotfile.lower_case", false);
pref("extensions.zotfile.subfolder", false);
pref("extensions.zotfile.subfolderFormat", "/%c");
pref("extensions.zotfile.userInput", false);
pref("extensions.zotfile.userInput_Default", "Paper");
pref("extensions.zotfile.version", "5.1.2");
pref("extensions.zotfile.zotfile3update", false);
pref("extensions.zotfile.info_window_duration_clickable", 8000);
pref("extensions.zotfile.info_window_duration", 6000);
pref(
  "extensions.zotfile.wildcards.default",
  '{"a": "author", "A": {"field": "author", "operations":[{"function":"exec","regex": "\\\\w{1}"},{"function":"toUpperCase"}]}, "F": "authorLastF", "I": "authorInitials", "d": "editor", "D": {"field": "editor", "operations":[{"function":"exec","regex": "\\\\w{1}"},{"function":"toUpperCase"}]}, "L": "editorLastF", "l": "editorInitials", "t": "titleFormated", "h": "shortTitle", "j": "publicationTitle", "s": "journalAbbreviation", "p": "publisher", "w": {"default": "publisher", "audioRecording": "label", "bill": "legislativeBody", "case": "court", "computerProgram": "company", "film": "distributor", "journalArticle": "publicationTitle", "magazineArticle": "publicationTitle", "newspaperArticle": "publicationTitle", "patent": "issuingAuthority", "presentation": "meetingName", "radioBroadcast": "network", "report": "institution", "thesis": "university", "tvBroadcast": "network"}, "n": "patentNumber", "i": "assignee", "y": "year", "v": "volume", "e": "issue", "T": "itemType", "f": "pages", "x": "extra", "c": "collectionPaths", "g": "authorLastG", "q":"lastAuthor", "Q":"lastAuthor_lastInitial", "u":"lastAuthor_lastf", "U":"lastAuthor_initials", "b":"citekey"}',
);
pref("extensions.zotfile.wildcards.user", "{}");

pref("extensions.zotfile.tablet", false);
pref("extensions.zotfile.tablet.dest_dir", "");
pref("extensions.zotfile.tablet.rename", true);
pref("extensions.zotfile.tablet.updateAlwaysShow", false);
pref("extensions.zotfile.tablet.updateExtractAnnotations", false);
pref("extensions.zotfile.tablet.dest_dir_relativePath", true);
pref("extensions.zotfile.tablet.tag", "_tablet");
pref("extensions.zotfile.tablet.tagModified", "_tablet_modified");
pref("extensions.zotfile.tablet.tagParentPush", false);
pref("extensions.zotfile.tablet.tagParentPush_tag", "_tablet_parent");
pref("extensions.zotfile.tablet.tagParentPull", false);
pref("extensions.zotfile.tablet.tagParentPull_tag", "_ANNOTATED");
pref("extensions.zotfile.tablet.confirmRepush", true);
pref("extensions.zotfile.tablet.storeCopyOfFile", false);
pref("extensions.zotfile.tablet.storeCopyOfFile_suffix", "_annotated");
pref("extensions.zotfile.tablet.subfolders", "[]");
pref("extensions.zotfile.tablet.projectFolders", 0);
pref("extensions.zotfile.tablet.showwarning", true);
pref("extensions.zotfile.tablet.projectFolders01", false);
pref("extensions.zotfile.tablet.projectFolders01_folder", "");
pref("extensions.zotfile.tablet.projectFolders01_label", "Project 01");
pref("extensions.zotfile.tablet.projectFolders02", false);
pref("extensions.zotfile.tablet.projectFolders02_folder", "");
pref("extensions.zotfile.tablet.projectFolders02_label", "Project 02");
pref("extensions.zotfile.tablet.projectFolders03", false);
pref("extensions.zotfile.tablet.projectFolders03_folder", "");
pref("extensions.zotfile.tablet.projectFolders03_label", "Project 03");
pref("extensions.zotfile.tablet.projectFolders04", false);
pref("extensions.zotfile.tablet.projectFolders04_folder", "");
pref("extensions.zotfile.tablet.projectFolders04_label", "Project 04");
pref("extensions.zotfile.tablet.projectFolders05", false);
pref("extensions.zotfile.tablet.projectFolders05_folder", "");
pref("extensions.zotfile.tablet.projectFolders05_label", "Project 05");
pref("extensions.zotfile.tablet.projectFolders06", false);
pref("extensions.zotfile.tablet.projectFolders06_folder", "");
pref("extensions.zotfile.tablet.projectFolders06_label", "Project 06");
pref("extensions.zotfile.tablet.projectFolders07", false);
pref("extensions.zotfile.tablet.projectFolders07_folder", "");
pref("extensions.zotfile.tablet.projectFolders07_label", "Project 07");
pref("extensions.zotfile.tablet.projectFolders08", false);
pref("extensions.zotfile.tablet.projectFolders08_folder", "");
pref("extensions.zotfile.tablet.projectFolders08_label", "Project 08");
pref("extensions.zotfile.tablet.projectFolders09", false);
pref("extensions.zotfile.tablet.projectFolders09_folder", "");
pref("extensions.zotfile.tablet.projectFolders09_label", "Project 09");
pref("extensions.zotfile.tablet.projectFolders10", false);
pref("extensions.zotfile.tablet.projectFolders10_folder", "");
pref("extensions.zotfile.tablet.projectFolders10_label", "Project 10");
pref("extensions.zotfile.tablet.projectFolders11", false);
pref("extensions.zotfile.tablet.projectFolders11_folder", "");
pref("extensions.zotfile.tablet.projectFolders11_label", "Project 11");
pref("extensions.zotfile.tablet.projectFolders12", false);
pref("extensions.zotfile.tablet.projectFolders12_folder", "");
pref("extensions.zotfile.tablet.projectFolders12_label", "Project 12");
pref("extensions.zotfile.tablet.projectFolders13", false);
pref("extensions.zotfile.tablet.projectFolders13_folder", "");
pref("extensions.zotfile.tablet.projectFolders13_label", "Project 13");
pref("extensions.zotfile.tablet.projectFolders14", false);
pref("extensions.zotfile.tablet.projectFolders14_folder", "");
pref("extensions.zotfile.tablet.projectFolders14_label", "Project 14");
pref("extensions.zotfile.tablet.projectFolders15", false);
pref("extensions.zotfile.tablet.projectFolders15_folder", "");
pref("extensions.zotfile.tablet.projectFolders15_label", "Project 15");
pref("extensions.zotfile.tablet.subfolder", false);
pref("extensions.zotfile.tablet.subfolderFormat", "/%w/%y");
pref("extensions.zotfile.tablet.mode", 1);

pref("extensions.zotfile.pdfOutline.tocDepth", 4);
pref("extensions.zotfile.pdfOutline.getToc", true);
pref("extensions.zotfile.pdfOutline.menuItem", true);

pref("extensions.zotfile.pdfExtraction.UsePDFJS", true);
pref("extensions.zotfile.pdfExtraction.debug", false);
pref("extensions.zotfile.pdfExtraction.UsePDFJSandPoppler", false);
pref("extensions.zotfile.pdfExtraction.popplerDeleteTxtFile", true);
pref("extensions.zotfile.pdfExtraction.Pull", true);
pref("extensions.zotfile.pdfExtraction.MenuItem", true);
pref("extensions.zotfile.pdfExtraction.NoteTruePage", true);
pref("extensions.zotfile.pdfExtraction.NoteFullCite", true);
pref("extensions.zotfile.pdfExtraction.NoteRemoveHyphens", true);
pref(
  "extensions.zotfile.pdfExtraction.formatNoteTitle",
  "<p><b>%(title) (%(date))</b></p>",
);
pref(
  "extensions.zotfile.pdfExtraction.formatNoteTitleColor",
  "<p><b>%(color) Annotations (%(date))</b></p>",
);
pref(
  "extensions.zotfile.pdfExtraction.formatAnnotationNote",
  '<p><i>%(content) (<a href="%(uri)">note on p.%(page)</a>)</i></p><br>',
);
pref(
  "extensions.zotfile.pdfExtraction.formatAnnotationHighlight",
  '<p>"%(content)" (%(cite))</p>',
);
pref(
  "extensions.zotfile.pdfExtraction.formatAnnotationUnderline",
  '<p>"<u>%(content)</u>" (%(cite))</p>',
);
pref("extensions.zotfile.pdfExtraction.replacements", "[]");
pref("extensions.zotfile.pdfExtraction.isoDate", false);
pref("extensions.zotfile.pdfExtraction.localeDateInNote", true);
pref("extensions.zotfile.pdfExtraction.colorNotes", false);
pref("extensions.zotfile.pdfExtraction.colorAnnotations", false);
pref(
  "extensions.zotfile.pdfExtraction.colorCategories",
  '{"Black": "#000000", "White": "#FFFFFF", "Gray": "#808080", "Red": "#FF0000", "Orange": "#FFA500", "Yellow": "#FFFF00", "Green": "#00FF00", "Cyan": "#00FFFF", "Blue": "#0000FF", "Magenta": "#FF00FF"}',
);
//pref("extensions.zotfile.pdfExtraction.format", '"<p>%(markup)s" %(cite)s</p><br><p>%(note)s</p><br>');
