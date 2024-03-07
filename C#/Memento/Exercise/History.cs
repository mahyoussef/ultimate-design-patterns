using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dotnet.Memento.Exercise
{
    public class History
    {
        private Stack<CanvasState> prevStates;

        public History()
        {

            prevStates = new Stack<CanvasState>();
        }

    public void SaveHistoryState(CanvasState canvasState)
    {
        prevStates.Push(canvasState);
    }

    public CanvasState Undo()
    {
        if (prevStates.Count > 0)
        {
            return prevStates.Pop();
        }
        return null;
    }
}
}
