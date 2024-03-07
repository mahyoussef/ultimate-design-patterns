using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dotnet.Memento.Exercise
{
    public class CanvasState
    {
    

        public string content { get; set; }
        public string color { get; set; }
        public string border { get; set; }

        public CanvasState(string content, string color, string border)
        {
            this.content = content;
            this.color = color;
            this.border = border;
        }

     
    }
}
