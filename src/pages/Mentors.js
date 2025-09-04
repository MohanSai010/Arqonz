//Mentors.js

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function Mentors() {
  const recentMentors = [
    {
      name: "Jessica Jane",
      role: "Web Developer",
      tasks: 40,
      rating: 4.7,
      reviews: 750,
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      follow: true,
    },
    {
      name: "Abraham Lincoln",
      role: "3D Design",
      tasks: 32,
      rating: 4.9,
      reviews: 510,
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      follow: false,
    },
    {
      name: "Curious George",
      role: "UI/UX Design",
      tasks: 40,
      rating: 4.7,
      reviews: 750,
      img: "https://randomuser.me/api/portraits/men/46.jpg",
      follow: true,
    },
  ];
  const mentors = [
    {
      name: "Jessica Jane",
      role: "Web Developer",
      desc: "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web...",
      tasks: 40,
      rating: 4.7,
      reviews: 750,
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      follow: true,
    },
    {
      name: "Alex Stanton",
      role: "UI/UX Designer",
      desc: "Hi, I'm Alex Stanton. I am a doctoral student at Oxford University majoring in UI/UX...",
      tasks: 60,
      rating: 4.9,
      reviews: 970,
      img: "https://randomuser.me/api/portraits/men/50.jpg",
      follow: false,
    },
    {
      name: "Antoine Griezmann",
      role: "Android Developer",
      desc: "Hi, I'm Antoine Griezmann. I'm an Android Developer at Google company...",
      tasks: 50,
      rating: 4.8,
      reviews: 830,
      img: "https://randomuser.me/api/portraits/men/51.jpg",
      follow: true,
    },
    {
      name: "Anna White",
      role: "3D Design",
      desc: "Hi, I'm Anna White. I'm a professional 3D Designer at Blender company...",
      tasks: 60,
      rating: 4.8,
      reviews: 870,
      img: "https://randomuser.me/api/portraits/women/47.jpg",
      follow: false,
    },
    {
      name: "Richard Kyle",
      role: "2D Design",
      desc: "Hi, I'm Richard Kyle. I'm a professional 2D Designer at Photoshop company...",
      tasks: 60,
      rating: 4.7,
      reviews: 730,
      img: "https://randomuser.me/api/portraits/men/52.jpg",
      follow: true,
    },
    {
      name: "Julia Philips",
      role: "iOS Developer",
      desc: "Hi, I'm Julia Philips. I'm a senior manager at Apple company...",
      tasks: 60,
      rating: 4.9,
      reviews: 910,
      img: "https://randomuser.me/api/portraits/women/53.jpg",
      follow: true,
    },
  ];

  return (
    <div className="flex-1 p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-bold">Explore Mentors</h2>
        <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search Mentors"
            className="border rounded-lg px-4 py-2 text-sm flex-1 sm:w-64"
          />
          <Button variant="outline" className="flex-1 sm:flex-none">
            Category
          </Button>
          <Button variant="outline" className="flex-1 sm:flex-none">
            Sort By : Popular
          </Button>
        </div>
      </div>

      {/* Recent Mentors */}
      <h3 className="font-semibold text-lg mb-4">Recent Mentors</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {recentMentors.map((m, i) => (
          <Card
            key={i}
            className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <img
                src={m.img}
                alt={m.name}
                className="w-12 h-12 rounded-full border object-cover"
              />
              <div>
                <h4 className="font-semibold">{m.name}</h4>
                <p className="text-sm text-gray-500">{m.role}</p>
                <p className="text-xs text-gray-400">
                  {m.tasks} Task · ⭐ {m.rating} ({m.reviews} Reviews)
                </p>
              </div>
            </div>
            {m.follow ? (
              <Button variant="ghost" className="text-indigo-600 text-sm font-semibold">
                + Follow
              </Button>
            ) : (
              <Button variant="ghost" className="text-gray-400 text-sm font-semibold">
                Followed
              </Button>
            )}
          </Card>
        ))}
      </div>

      {/* Mentors */}
      <h3 className="font-semibold text-lg mb-4">Mentors</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((m, i) => (
          <Card key={i} className="p-4">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={m.img}
                alt={m.name}
                className="w-12 h-12 rounded-full border object-cover"
              />
              <div>
                <h4 className="font-semibold">{m.name}</h4>
                <p className="text-sm text-gray-500">{m.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-4">{m.desc}</p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <p className="text-xs text-gray-400">
                {m.tasks} Task · ⭐ {m.rating} ({m.reviews} Reviews)
              </p>
              {m.follow ? (
                <Button variant="ghost" className="text-indigo-600 text-sm font-semibold">
                  + Follow
                </Button>
              ) : (
                <Button variant="ghost" className="text-gray-400 text-sm font-semibold">
                  Followed
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
