import React, { useState, useEffect, useRef } from "react";
import {
  HomeIcon,
  UsersIcon,
  AwardIcon,
  BarChart2Icon,
  MicIcon,
  CheckIcon,
} from "lucide-react";
import SuccessToast from "../screens/hr/Toast";

interface HRBottomNavigationProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
  onVoiceAssistant: () => void;
}

const HRBottomNavigation: React.FC<HRBottomNavigationProps> = ({
  activeScreen,
  setActiveScreen,
  onVoiceAssistant,
}) => {
  const [isMicActive, setIsMicActive] = useState(false);
  const [transcribedText, setTranscribedText] = useState("");
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const [showToast, setShowToast] = useState(false);
  const employees = [
    {
      name: "Venkatesh",
      id: 1,
      photo:
        "https://cdn.prod.website-files.com/6694b952e94e44b49199fcc1/672b8f551ff0a47b5ffce2b0_Venkatesh.png",
      content:
        "Venkatesh has consistently demonstrated exceptional design leadership on the mobile app redesign project. He delivered high-quality work ahead of schedule, mentored junior designers, and received outstanding feedback from both the product team and end users during usability testing.",
    },
    {
      name: "June",
      id: 2,
      photo:
        "https://cdn.prod.website-files.com/6694b952e94e44b49199fcc1/672b8f85eb74ade918110384_June.png",
      content:
        "June has consistently demonstrated exceptional design leadership on the mobile app redesign project. He delivered high-quality work ahead of schedule, mentored junior designers, and received outstanding feedback from both the product team and end users during usability testing.",
    },
    {
      name: "Lekshmi",
      id: 3,
      photo:
        "https://cdn.prod.website-files.com/6694b952e94e44b49199fcc1/672b8f7a43813eca23a8d9a4_Lekshmi.png",
      content:
        "Lekshmi has consistently demonstrated exceptional design leadership on the mobile app redesign project. He delivered high-quality work ahead of schedule, mentored junior designers, and received outstanding feedback from both the product team and end users during usability testing.",
    },
    {
      name: "Asha",
      id: 4,
      photo:
        "https://cdn.prod.website-files.com/6694b952e94e44b49199fcc1/6729c4562ccdb6a6ff590a41_asha.jpg",
      content:
        "Asha has consistently demonstrated exceptional design leadership on the mobile app redesign project. He delivered high-quality work ahead of schedule, mentored junior designers, and received outstanding feedback from both the product team and end users during usability testing.",
    },
    {
      name: "Shibu",
      id: 5,
      photo:
        "https://cdn.prod.website-files.com/6694b952e94e44b49199fcc1/672b8f5fd690e63174ce359a_Shibu.png",
      content:
        "Shibu has consistently demonstrated exceptional design leadership on the mobile app redesign project. He delivered high-quality work ahead of schedule, mentored junior designers, and received outstanding feedback from both the product team and end users during usability testing.",
    },
  ];

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript
        .trim()
        .toLowerCase();
      console.log("Heard:", transcript);
      setTranscribedText(transcript);

      if (transcript.includes("give award to")) {
        const spokenName = transcript.replace("give award to", "").trim();
        const matchedEmployee = employees.find(
          (emp) => emp.name.toLowerCase() === spokenName.toLowerCase()
        );

        if (matchedEmployee) {
          handleSpotAward(matchedEmployee);
        } else {
          alert(`No employee found with name "${spokenName}"`);
        }
      }
    };

    recognitionRef.current = recognition;
  }, []);

  useEffect(() => {
    if (!recognitionRef.current) return;

    const recognition = recognitionRef.current;

    if (isMicActive) {
      recognition.start();
      recognition.onend = () => {
        recognition.start(); // restart only if mic is active
      };
    } else {
      recognition.onend = null; // don't restart
      recognition.stop(); // fully stop
    }

    return () => {
      recognition.onend = null;
      recognition.stop();
    };
  }, [isMicActive]);

  const handleMicClick = () => {
    setIsMicActive((prev) => !prev);
    if (!isMicActive) {
      setTranscribedText("");
    }
  };

  const handleSpotAward = async (employee: {
    name: string;
    id: number;
    photo: string;
    content: string;
  }) => {
    console.log("Triggering spot award for:", employee);
    const webhookUrl =
      "https://hook.eu2.make.com/b4c69lig0gph9itprf2ua65wrl511kkj";

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: employee.name,
          employeeId: employee.id,
          photo: employee.photo,
          content: employee.content,
        }),
      });

      if (response.ok) {
        // alert(`🎉 Spot award triggered for ${employee.name}`);
        setShowToast(true);
      } else {
        alert("Failed to trigger spot award");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Error sending data to Make.com");
    }
  };

  const handleOkClick = () => {
    onVoiceAssistant();
    setIsMicActive(false);
    setTranscribedText("");
  };

  const navItems = [
    { id: "home", icon: HomeIcon, label: "Home" },
    { id: "teams", icon: UsersIcon, label: "Teams" },
    { id: "awards", icon: AwardIcon, label: "Awards" },
    { id: "analytics", icon: BarChart2Icon, label: "Analytics" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 flex justify-around items-center h-16 px-2 z-10">
      {navItems.map((item) => {
        const isActive = activeScreen === item.id;
        return (
          <button
            key={item.id}
            className={`flex flex-col items-center justify-center w-full h-full relative ${
              isActive ? "text-purple-600" : "text-gray-500"
            }`}
            onClick={() => setActiveScreen(item.id)}
          >
            <item.icon size={22} />
            <span className="text-xs mt-1">{item.label}</span>
            {isActive && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-purple-600 rounded-t-full transition-all duration-300" />
            )}
          </button>
        );
      })}
      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
        {isMicActive && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full py-2 px-4 flex items-center animate-slide-up min-w-[200px]">
            <p className="text-sm text-gray-700 flex-1 truncate">
              {transcribedText}
            </p>
            {transcribedText && (
              <button
                onClick={handleOkClick}
                className="ml-2 bg-purple-500 text-white rounded-full p-1 hover:bg-purple-600 transition-colors"
              >
                <CheckIcon size={14} />
              </button>
            )}
          </div>
        )}
        <button
          onClick={handleMicClick}
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg ${
            isMicActive
              ? "bg-gradient-to-r from-purple-600 to-indigo-700"
              : "bg-gradient-to-r from-purple-500 to-indigo-600"
          } text-white hover:shadow-xl transition-all duration-300 group`}
        >
          <div
            className={`absolute inset-0 rounded-full bg-white ${
              isMicActive
                ? "opacity-30 animate-ping scale-105"
                : "opacity-40 group-hover:opacity-60 animate-pulse"
            }`}
          ></div>
          {isMicActive && (
            <>
              <div
                className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"
                style={{ animationDuration: "1.5s" }}
              ></div>
              <div
                className="absolute inset-0 rounded-full bg-white opacity-10 animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>
            </>
          )}
          <MicIcon size={24} className={isMicActive ? "animate-pulse" : ""} />
        </button>
      </div>
      {showToast && (
        <SuccessToast
          message="Success! Your action was completed."
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default HRBottomNavigation;
