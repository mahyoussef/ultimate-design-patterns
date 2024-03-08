using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dotnet.Visitor
{
    public class RemoteWorkShiftScheduleManagement : IScheduleManagement
    {
        public void calculateOverTime()
        {
            Console.WriteLine("Calculating over time for remote work shift..");
        }

        public void generateReport()
        {
            Console.WriteLine("Generating report for remote work shift...");
        }
        public void accept(IScheduleManagementVisitor scheduleManagementVisitor)
        {
            scheduleManagementVisitor.visit(this);
        }
    }
}
