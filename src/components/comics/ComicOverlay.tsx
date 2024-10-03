import React, { ReactElement } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import {
  toolbarPlugin,
  ToolbarSlot,
  TransformToolbarSlot,
} from "@react-pdf-viewer/toolbar";
import { zoomPlugin } from "@react-pdf-viewer/zoom";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";

// Make sure this version has parity with the Viewer
const PDF_WORKER_URL =
  "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js";

type ComicOverlayProps = {
  isOpen: boolean;
  pdfUrl: string | null;
  title: string | null;
  onClose: () => void;
};

export default function ComicOverlay({
  isOpen,
  pdfUrl,
  title,
  onClose,
}: ComicOverlayProps) {
  const toolbarPluginInstance = toolbarPlugin({
    fullScreenPlugin: {
      getFullScreenTarget: (pagesContainer: any) =>
        pagesContainer.closest(".js-viewer-container"),
      renderExitFullScreenButton: (props: any) => <></>,
    },
  });
  const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;

  const transform: TransformToolbarSlot = (slot: ToolbarSlot) => ({
    ...slot,
    Download: () => <></>,
    DownloadMenuItem: () => <></>,
    // EnterFullScreen: () => <></>,
    // EnterFullScreenMenuItem: () => <></>,
    Open: () => <></>,
    Print: () => <></>,
    SwitchTheme: () => <></>,
    SwitchThemeMenuItem: () => <></>,
  });
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs: any) => [
      // Remove the attachments tab (\`defaultTabs[2]\`)
      // Remove the Bookmarks tab (\`defaultTabs[0]\`)
      defaultTabs[0], // Thumbnails tab
    ],
  });
  const zoomPluginInstance = zoomPlugin();
  const { Zoom } = zoomPluginInstance;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="min-w-full h-screen bg-finalChapterGray bg-opacity-20 backdrop-blur-sm border-none">
        <DialogHeader>
          <DialogTitle className="text-finalChapterGray">{title}</DialogTitle>
          <DialogClose onClick={onClose} />
        </DialogHeader>
        <div className="h-svh">
          {pdfUrl && (
            <Worker workerUrl={PDF_WORKER_URL}>
              <div
                className="js-viewer-container"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    backgroundColor: "#5f5f5f",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    padding: "0.25rem",
                  }}
                >
                  <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
                </div>
                <div
                  style={{
                    flex: 1,
                    overflow: "hidden",
                  }}
                >
                  <Viewer
                    theme="dark"
                    fileUrl={pdfUrl}
                    plugins={[toolbarPluginInstance]}
                  />
                </div>
              </div>
            </Worker>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
