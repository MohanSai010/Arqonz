import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import ActivityChart from "../components/ActivityChart";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import Calendar from "../components/Calendar";
import TodayTask from "../components/TodayTask";
import { Card, CardContent } from "../components/ui/card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Bell } from "lucide-react"; // 🔔 Notification Icon
import "react-circular-progressbar/dist/styles.css";
import Sidebar from "../components/Sidebar";
// ---- Running Task Card ----
function RunningTaskCard() {
  const runningTasks = 65;
  const totalTasks = 100;
  const progressPercent = 45;

  return (
    <Card
  className="!bg-black text-white rounded-2xl p-6 shadow-lg flex flex-col justify-start"
  style={{ width: 220, height: 210 }}
>
  <CardContent className="p-0 flex flex-col h-full justify-start">
    <h3 className="text-gray-300 text-lg mb-1">Running Task</h3>

    <div className="text-4xl font-bold -mt-1">{runningTasks}</div>

    <div className="flex items-center justify-between mt-3">
      <div className="w-16 h-16">
        <CircularProgressbar
          value={progressPercent}
          text={`${progressPercent}%`}
          styles={buildStyles({
            textColor: "#ffffff",
            pathColor: "#6366f1",
            trailColor: "#222222",
            textSize: "20px",
          })}
        />
      </div>

      <div className="flex flex-col items-end ml-3">
        <span className="text-white text-lg font-semibold">{totalTasks}</span>
        <span className="text-gray-400 text-sm mt-1">Task</span>
      </div>
    </div>
  </CardContent>
</Card>

  );
}

// ------- Dashboard Page -------
export default function Dashboard() {
  return (
    <div className="flex-1 p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-[#F8FAFF] min-h-screen">
      <div className="lg:col-span-2">
        {/* 🔹 Top Header Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">Hi, Dennis Nzioki</h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Let’s finish your task today!
            </p>
          </div>
          <div className="flex items-center gap-4 self-end sm:self-auto">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="w-6 h-6 text-gray-600" />
            </button>
            <img
              src="https://randomuser.me/api/portraits/men/44.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </div>

        {/* Running Task + Activity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <RunningTaskCard />
          <Card className="sm:col-span-1 lg:col-span-2 bg-white rounded-2xl shadow-md">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-gray-500 mb-2 font-medium">Activity</h3>
              <ActivityChart />
            </CardContent>
          </Card>
        </div>

        {/* Monthly Mentors */}
        <h3 className="mt-8 mb-4 font-semibold text-lg">Monthly Mentors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Mentor Card 1 */}
          <Card className="bg-white p-4 rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Curious George"
                className="w-12 h-12 object-cover rounded-full border"
              />
              <div>
                <h4 className="font-semibold">Curious George</h4>
                <p className="text-gray-500 text-sm">UI/UX Design</p>
                <p className="text-xs text-gray-400">
                  40 Task · ⭐ 4.7 (750 Reviews)
                </p>
              </div>
            </div>
            <Button variant="ghost" className="text-indigo-600 text-sm font-semibold">
              + Follow
            </Button>
          </Card>

          {/* Mentor Card 2 */}
          <Card className="bg-white p-4 rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src="https://randomuser.me/api/portraits/men/85.jpg"
                alt="Abraham Lincoln"
                className="w-12 h-12 object-cover rounded-full border"
              />
              <div>
                <h4 className="font-semibold">Abraham Lincoln</h4>
                <p className="text-gray-500 text-sm">3D Design</p>
                <p className="text-xs text-gray-400">
                  32 Task · ⭐ 4.9 (510 Reviews)
                </p>
              </div>
            </div>
            <Button variant="ghost" className="text-gray-400 text-sm font-semibold">
              Followed
            </Button>
          </Card>
        </div>

        {/* Upcoming Tasks */}
        <h3 className="mt-8 mb-4 font-semibold text-lg">Upcoming Task</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Task Card 1 */}
          <Card className="p-4 rounded-xl shadow-md bg-white">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="App Design"
              className="rounded-xl mb-4 object-cover w-full h-28"
            />
            <h4 className="font-semibold">Creating Mobile App Design</h4>
            <Progress value={75} className="mt-2" />
            <div className="flex flex-wrap justify-between items-center mt-2 text-sm text-gray-500 gap-2">
              <p>3 Days Left</p>
              <div className="flex -space-x-2">
                <img src="https://randomuser.me/api/portraits/women/65.jpg" className="w-6 h-6 rounded-full border" alt="" />
                <img src="https://randomuser.me/api/portraits/women/66.jpg" className="w-6 h-6 rounded-full border" alt="" />
                <img src="https://randomuser.me/api/portraits/women/67.jpg" className="w-6 h-6 rounded-full border" alt="" />
              </div>
            </div>
          </Card>

          {/* Task Card 2 */}
          <Card className="p-4 rounded-xl shadow-md bg-white">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Website"
              className="rounded-xl mb-4 object-cover w-full h-28"
            />
            <h4 className="font-semibold">Creating Perfect Website</h4>
            <Progress value={85} className="mt-2" />
            <div className="flex flex-wrap justify-between items-center mt-2 text-sm text-gray-500 gap-2">
              <p>4 Days Left</p>
              <div className="flex -space-x-2">
                <img src="https://randomuser.me/api/portraits/men/68.jpg" className="w-6 h-6 rounded-full border" alt="" />
                <img src="https://randomuser.me/api/portraits/men/69.jpg" className="w-6 h-6 rounded-full border" alt="" />
                <img src="https://randomuser.me/api/portraits/men/70.jpg" className="w-6 h-6 rounded-full border" alt="" />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6">
        {/* Calendar */}
        <Card className="bg-white p-4 rounded-2xl shadow-md">
          <Calendar />
        </Card>

        {/* Task Today */}
        <Card className="bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
            alt="Task Today"
            className="rounded-t-2xl object-cover w-full h-36"
          />
          <CardContent className="p-4 sm:p-6">
            <h4 className="font-semibold">Creating Awesome Mobile Apps</h4>
            <p className="text-sm text-gray-500">UI/UX Designer</p>
            <Progress value={90} className="mt-3" />
            <p className="text-sm text-gray-500 mt-2">1 Hour</p>
            <div className="flex -space-x-2 my-3">
              <img src="https://randomuser.me/api/portraits/women/71.jpg" className="w-8 h-8 rounded-full border" alt="" />
              <img src="https://randomuser.me/api/portraits/women/72.jpg" className="w-8 h-8 rounded-full border" alt="" />
              <img src="https://randomuser.me/api/portraits/women/73.jpg" className="w-8 h-8 rounded-full border" alt="" />
            </div>
            <div className="mt-4">
              <h5 className="font-semibold text-sm mb-2">Detail Task</h5>
              <ol className="list-decimal ml-4 text-sm text-gray-600 space-y-1">
                <li>Understanding the tools in Figma</li>
                <li>Understand the basics of making designs</li>
                <li>Design a mobile application with Figma</li>
              </ol>
            </div>
            <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">
              Go To Detail
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
