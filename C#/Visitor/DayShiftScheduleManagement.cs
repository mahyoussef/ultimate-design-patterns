using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dotnet.Visitor
{
    public class DayShiftScheduleManagement : IScheduleManagement
    {
        public void generateReport()
        {
            Console.WriteLine("Generating report for day shift...");
        }
        public void calculateOverTime()
        {
            Console.WriteLine("Calculating over time for day shift..");
        }

        public void accept(IScheduleManagementVisitor scheduleManagementVisitor)
        {
            scheduleManagementVisitor.visit(this);
        }
    }
}
