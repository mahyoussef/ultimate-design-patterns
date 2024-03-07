using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dotnet.Memento
{
    public class History
    {
        private Stack<TextEditorState> prevStates;

        public History()
        {
            prevStates = new Stack<TextEditorState>();
        }

        public void SaveHistoryState(TextEditorState textEditorState)
        {
            prevStates.Push(textEditorState);
        }

        public TextEditorState Undo()
        {
            if (prevStates.Count > 0)
            {
                return prevStates.Pop();
            }
            return null;
        }
    }
}
