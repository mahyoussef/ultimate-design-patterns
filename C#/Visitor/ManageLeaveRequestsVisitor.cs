using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dotnet.Visitor
{
    public class ManageLeaveRequestsVisitor : IScheduleManagementVisitor
    {
        public void Visit(DayShiftScheduleManagement dayShiftScheduleManagement)
        {
            Console.WriteLine("Managing leave requests for day shift.");
        }

        public void Visit(NightShiftScheduleManagement nightShiftScheduleManagement)
        {
            Console.WriteLine("Managing leave requests for night shift.");
        }

        public void Visit(RemoteWorkShiftScheduleManagement remoteWorkShiftScheduleManagement)
        {
           Console.WriteLine("Managing leave requests for remote work shift.");
        }
    }
}
