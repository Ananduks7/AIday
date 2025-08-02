import React, { useState } from "react";
import {
  EyeIcon,
  EyeOffIcon,
  MailIcon,
  KeyIcon,
  ArrowRightIcon,
  UserIcon,
  BriefcaseIcon,
  ChevronRightIcon,
} from "lucide-react";
interface WelcomeScreenProps {
  onNext: () => void;
  onHRLogin?: () => void;
}
const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNext, onHRLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const [loginType, setLoginType] = useState<"employee" | "hr" | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginType === "hr") {
      // Redirect to HR dashboard
      if (onHRLogin) {
        onHRLogin();
      } else {
        console.log("Redirecting to HR dashboard");
        onNext(); // For demo purposes if onHRLogin isn't provided
      }
    } else {
      // Regular employee flow
      onNext();
    }
  };
  const selectLoginType = (type: "employee" | "hr") => {
    setLoginType(type);
    setShowLoginOptions(false);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full max-w-sm">
        {/* Animated Avatar */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center animate-float shadow-sm">
            <img
              src="https://i.pinimg.com/736x/98/19/07/981907dd062aecce6e9c61d51c729f72.jpg"
              alt="AIday logo"
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>
        {/* App Name & Tagline */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            <span className="text-indigo-600">AI</span>
            <span>day</span>
          </h1>
          <p className="text-sm text-gray-600">
            Balance productivity and wellness in one place
          </p>
        </div>
        {/* Login Type Selection */}
        {!loginType && (
          <div className="mb-6 animate-fade-in">
            <p className="text-center text-sm text-gray-600 mb-4">
              Choose your login type
            </p>
            <div className="grid gap-4">
              <button
                type="button"
                onClick={() => selectLoginType("employee")}
                className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <UserIcon size={20} className="text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-gray-800">
                      Login as Employee
                    </h3>
                    <p className="text-xs text-gray-500">
                      Access your personal dashboard
                    </p>
                  </div>
                </div>
                <ChevronRightIcon
                  size={20}
                  className="text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                type="button"
                onClick={() => selectLoginType("hr")}
                className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:border-purple-200 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Subtle background animation effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-indigo-200 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"></div>
                <div className="flex items-center relative z-10">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:shadow">
                    <BriefcaseIcon
                      size={20}
                      className="text-purple-600 group-hover:text-purple-700"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-gray-800 group-hover:text-purple-800 transition-colors duration-300">
                      Login as HR
                    </h3>
                    <div className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mr-1.5 group-hover:animate-pulse"></span>
                      <p className="text-xs text-gray-500 group-hover:text-purple-600 transition-colors duration-300">
                        Manage team performance & recognition
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative z-10 flex items-center">
                  <span className="text-xs font-medium text-purple-500 opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300">
                    Select
                  </span>
                  <ChevronRightIcon
                    size={20}
                    className="text-gray-400 group-hover:text-purple-500 transform group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>
              </button>
            </div>
          </div>
        )}
        {/* Login/Signup Form - Only shown after selecting login type */}
        {loginType && (
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <button
                onClick={() => setLoginType(null)}
                className="flex items-center text-sm text-gray-600 hover:text-gray-800"
              >
                <ArrowRightIcon
                  size={16}
                  className="transform rotate-180 mr-1"
                />
                Back
              </button>
              <div className="flex-1 text-center">
                <h2 className="font-medium text-gray-800">
                  {loginType === "employee" ? "Employee Login" : "HR Login"}
                </h2>
              </div>
              <div className="w-12"></div> {/* Empty space for balance */}
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MailIcon size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                    required
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <KeyIcon size={18} className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full pl-10 pr-12 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOffIcon size={18} className="text-gray-400" />
                    ) : (
                      <EyeIcon size={18} className="text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
              {isLogin && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
              )}
              <button
                type="submit"
                className={`w-full py-3 ${
                  loginType === "hr"
                    ? "bg-purple-500 hover:bg-purple-600"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white font-medium rounded-xl transition-colors duration-200 flex items-center justify-center`}
              >
                {isLogin ? "Sign In" : "Create Account"}
                <ArrowRightIcon size={18} className="ml-1" />
              </button>
              <div className="relative flex items-center justify-center my-4">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-sm">
                  or
                </span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <button
                  type="button"
                  className="py-3 px-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                  onClick={onNext}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className="mr-2"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </button>
              </div>
              <div className="text-center mt-6">
                <button
                  type="button"
                  className="text-sm text-gray-600"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin
                    ? "Don't have an account? Sign up"
                    : "Already have an account? Sign in"}
                </button>
              </div>
              <div className="flex items-center justify-center mt-4">
                <button
                  type="button"
                  className="flex items-center text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-xl"
                  onClick={onNext}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M6.5 2h11a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" />
                    <path d="M6.5 10h11a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" />
                    <path d="m14.5 14-5-5 5-5" />
                  </svg>
                  Use Face ID / Touch ID
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default WelcomeScreen;
