import { Card, CardContent } from "../components/ui/card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function RunningTaskCard() {
  const runningTasks = 65;
  const totalTasks = 100;
  const progressPercent = 45;

  return (
    <Card className="bg-[#181A29] text-white rounded-2xl shadow-lg p-6" style={{ width: 194, height: 214 }}>
      <CardContent className="p-0">
        <h3 className="text-gray-300 text-lg mb-2">Running Task</h3>
        <div className="text-4xl font-bold mb-2">{runningTasks}</div>
        <div className="flex items-center">
          <div className="w-14 h-14">
            <CircularProgressbar
              value={progressPercent}
              text={`${progressPercent}%`}
              styles={buildStyles({
                textColor: "#000000ff",
                pathColor: "#6366f1",
                trailColor: "#23272f",
                textSize: "20px",
              })}
            />
          </div>
          <div className="flex flex-col ml-5">
            <span className="text-white text-md font-semibold">{totalTasks}</span>
            <span className="text-[#777CA3] text-sm">Task</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
