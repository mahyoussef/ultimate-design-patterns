using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dotnet.Memento.Exercise
{
    public class Canvas
    {
       

        public string content { get; set; }
        public string color { get; set; }
        public string border { get; set; }

        public Canvas()
        {
            this.content = "";
            this.color = "";
            this.border = "";
        }

        public CanvasState Save()
        {
            return new CanvasState(content, color, border);
        }

        public void Restore(CanvasState canvasState)
        {
            content = canvasState.content;
            color = canvasState.color;
            border = canvasState.border;
        }

        

       
    }
}
