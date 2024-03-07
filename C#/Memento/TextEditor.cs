using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dotnet.Memento
{
    public class TextEditor
    {
        public string content { get; set; }

        public TextEditor()
        {
            content = "";
        }

        public TextEditorState Save()
        {
            return new TextEditorState(content);
        }

        public void Restore(TextEditorState textEditorState)
        {
            content = textEditorState.content;

        }

    }
}
