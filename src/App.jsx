import React, { useState } from 'react';
import { LayoutDashboard, BookOpen, Calendar, CheckCircle, User, Bell, Menu, Book, ChevronRight, Clock, Award } from 'lucide-react';

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const courses = [
    { id: 1100, name: "Statistical Methods", faculty: "Dr. K. Subba", att: 74.19 },
    { id: 1101, name: "Operating Systems", faculty: "Mohm. Ahmed", att: 85.00 },
    { id: 1102, name: "Java Programming", faculty: "K. Uma Shankar", att: 62.50 },
    { id: 1103, name: "Software Engineering", faculty: "Ms. Vennela B", att: 90.00 }
  ];

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className={`${isOpen ? 'w-64' : 'w-20'} bg-white border-r transition-all hidden md:flex flex-col`}>
        <div className="p-6 font-bold text-xl text-indigo-600 truncate">{isOpen ? 'CAMPX PRO' : 'K'}</div>
        <nav className="flex-1 px-4 space-y-2">
          <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active isOpen={isOpen} />
          <NavItem icon={<BookOpen size={20}/>} label="Learning" isOpen={isOpen} />
          <NavItem icon={<CheckCircle size={20}/>} label="Exams" isOpen={isOpen} />
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-slate-100 rounded-lg"><Menu size={20}/></button>
          <div className="flex items-center gap-4">
            <Bell size={20} className="text-slate-400" />
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold hidden sm:block">Karthikeyan R.</span>
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">RK</div>
            </div>
          </div>
        </header>

        <main className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Stat val="74.19%" label="Attendance" color="red" />
            <Stat val="18.0" label="Credits" color="indigo" />
            <Stat val="01" label="Active Quiz" color="orange" />
            <Stat val="8.42" label="Current GPA" color="emerald" />
          </div>

          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-4 border-b font-bold text-slate-700">Course Management</div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400">
                  <tr>
                    <th className="p-4">Subject</th>
                    <th className="p-4">Faculty</th>
                    <th className="p-4">Attendance</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y">
                  {courses.map(c => (
                    <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-700">{c.name}</td>
                      <td className="p-4 text-slate-500">{c.faculty}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full ${c.att < 75 ? 'bg-red-500' : 'bg-emerald-500'}`} style={{width: `${c.att}%`}}></div>
                          </div>
                          <span className="text-[10px] font-bold">{c.att}%</span>
                        </div>
                      </td>
                      <td className="p-4"><ChevronRight size={16} className="text-slate-300"/></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, isOpen }) {
  return (
    <div className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer ${active ? 'bg-indigo-50 text-indigo-600' : 'text-slate-400 hover:bg-slate-50'}`}>
      {icon} {isOpen && <span className="text-sm font-bold">{label}</span>}
    </div>
  );
}

function Stat({ val, label, color }) {
  const colors = { red: 'text-red-500', indigo: 'text-indigo-600', orange: 'text-orange-500', emerald: 'text-emerald-500' };
  return (
    <div className="bg-white p-5 rounded-xl border shadow-sm">
      <p className="text-[10px] font-bold text-slate-400 uppercase">{label}</p>
      <h4 className={`text-2xl font-black ${colors[color]}`}>{val}</h4>
    </div>
  );
}
