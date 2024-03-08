using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dotnet.Visitor
{
    public class NightShiftScheduleManagement : IScheduleManagement
    {
        public void generateReport()
        {
            Console.WriteLine("Generating report for night shift...");
        }
        public void calculateOverTime()
        {
            Console.WriteLine("Calculating over time for night shift..");
        }

        public void accept(IScheduleManagementVisitor scheduleManagementVisitor)
        {
            scheduleManagementVisitor.visit(this);
        }
    }
}
