import { FileTypes } from "./enums";

export function handleDownload(e: NavigateEvent) {
  if (e.downloadRequest) {
    e.intercept({ handler: async () => {
      const url = new URL(e.destination.url);
      const params = Object.fromEntries(url.searchParams.entries());
      const { fileType } = params;
      const fileHandle = await window.showSaveFilePicker({
        types: [FileTypes[fileType as "svg"]],
        suggestedName: e.downloadRequest
      });
      const writable = await fileHandle.createWritable();
      const { body } = await fetch(url);
      body?.pipeTo(writable);
    } });
  }
}