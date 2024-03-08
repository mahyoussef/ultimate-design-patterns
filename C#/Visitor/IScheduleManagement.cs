using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dotnet.Visitor
{
    public interface IScheduleManagement
    {
        void generateReport();
        void calculateOverTime();
        void accept(IScheduleManagementVisitor scheduleManagementVisitor);
    }
}
