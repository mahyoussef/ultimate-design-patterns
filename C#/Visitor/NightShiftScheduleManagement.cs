using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dotnet.Visitor
{
    public class NightShiftScheduleManagement : IScheduleManagement
    {
        public void GenerateReport()
        {
            Console.WriteLine("Generating report for night shift...");
        }
        public void CalculateOverTime()
        {
            Console.WriteLine("Calculating over time for night shift..");
        }

        public void Accept(IScheduleManagementVisitor scheduleManagementVisitor)
        {
            scheduleManagementVisitor.Visit(this);
        }
    }
}
