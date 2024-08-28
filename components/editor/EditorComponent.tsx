"use client";

import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps
} from '@mdxeditor/editor'
import { FC } from "react";
import './github-md-light.css';

interface EditorProps {
  markdown?: string;
  setMarkdown?: (markdown: string) => void;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
  readOnly?: boolean;
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const Editor: FC<EditorProps> = ({ markdown, editorRef, setMarkdown, readOnly }) => {
  return (
    <MDXEditor
      onChange={setMarkdown}
      ref={editorRef}
      markdown={markdown? markdown : ''}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin()
      ]}
      contentEditableClassName='markdown-body'
      readOnly={readOnly || false}
    />
  );
};

export default Editor;