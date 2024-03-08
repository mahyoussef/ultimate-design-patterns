using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dotnet.Visitor
{
    public class DayShiftScheduleManagement : IScheduleManagement
    {
        public void GenerateReport()
        {
            Console.WriteLine("Generating report for day shift...");
        }
        public void CalculateOverTime()
        {
            Console.WriteLine("Calculating over time for day shift..");
        }

        public void Accept(IScheduleManagementVisitor scheduleManagementVisitor)
        {
            scheduleManagementVisitor.Cisit(this);
        }
    }
}
