using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dotnet.Visitor
{
       public interface IScheduleManagementVisitor
    {
        void Visit(DayShiftScheduleManagement dayShiftScheduleManagement);
        void Visit(NightShiftScheduleManagement nightShiftScheduleManagement);
        void Visit(RemoteWorkShiftScheduleManagement remoteWorkShiftScheduleManagement);
    }
}
