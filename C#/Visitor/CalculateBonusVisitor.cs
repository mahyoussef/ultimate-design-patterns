using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dotnet.Visitor
{
    public class CalculateBonusVisitor : IScheduleManagementVisitor
    {
        public void Visit(DayShiftScheduleManagement dayShiftScheduleManagement)
        {
            Console.WriteLine("Calculating bonus for day shift...");
        }

        public void Visit(NightShiftScheduleManagement nightShiftScheduleManagement)
        {
            Console.WriteLine("Calculating bonus for nigth shift...");
        }

        public void Visit(RemoteWorkShiftScheduleManagement remoteWorkShiftScheduleManagement)
        {
            Console.WriteLine("Calculating bonus for remote work shift...");
        }
    }
}
