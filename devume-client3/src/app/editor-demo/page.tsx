"use client";

import MarkdownEditor from '@/components/editor/MarkdownEditor';

export default function EditorDemoPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Markdown Editor Demo</h1>
      <MarkdownEditor />
    </div>
  );
}
