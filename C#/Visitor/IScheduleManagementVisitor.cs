using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dotnet.Visitor
{
       public interface IScheduleManagementVisitor
    {
        void visit(DayShiftScheduleManagement dayShiftScheduleManagement);
        void visit(NightShiftScheduleManagement nightShiftScheduleManagement);
        void visit(RemoteWorkShiftScheduleManagement remoteWorkShiftScheduleManagement);
    }
}
