using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dotnet.Visitor
{
    public class CalculateBonusVisitor : IScheduleManagementVisitor
    {
        public void visit(DayShiftScheduleManagement dayShiftScheduleManagement)
        {
            Console.WriteLine("Calculating bonus for day shift...");
        }

        public void visit(NightShiftScheduleManagement nightShiftScheduleManagement)
        {
            Console.WriteLine("Calculating bonus for nigth shift...");
        }

        public void visit(RemoteWorkShiftScheduleManagement remoteWorkShiftScheduleManagement)
        {
            Console.WriteLine("Calculating bonus for remote work shift...");
        }
    }
}
