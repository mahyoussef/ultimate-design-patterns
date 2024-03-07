using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dotnet.Memento
{
    public class TextEditorState
    {
        public string content { get; set; }

        public TextEditorState(string content)
        {
            this.content = content;
        }


    }
}
