import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon, MailIcon, KeyIcon, ArrowRightIcon } from 'lucide-react';
interface WelcomeScreenProps {
  onNext: () => void;
}
const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onNext
}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };
  return <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full max-w-sm">
        {/* Animated Avatar */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center animate-float shadow-sm">
            <img src="/Image_%286%29.jpg" alt="AIday logo" className="w-32 h-32 object-contain" />
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
        {/* Login/Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MailIcon size={18} className="text-gray-400" />
              </div>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all" required />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <KeyIcon size={18} className="text-gray-400" />
              </div>
              <input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full pl-10 pr-12 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all" required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                {showPassword ? <EyeOffIcon size={18} className="text-gray-400" /> : <EyeIcon size={18} className="text-gray-400" />}
              </button>
            </div>
          </div>
          {isLogin && <div className="flex justify-end">
              <button type="button" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </button>
            </div>}
          <button type="submit" className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors duration-200 flex items-center justify-center">
            {isLogin ? 'Sign In' : 'Create Account'}
            <ArrowRightIcon size={18} className="ml-1" />
          </button>
          <div className="relative flex items-center justify-center my-4">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-sm">or</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <button type="button" className="py-3 px-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center" onClick={onNext}>
              <svg width="18" height="18" viewBox="0 0 24 24" className="mr-2">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Google
            </button>
          </div>
          <div className="text-center mt-6">
            <button type="button" className="text-sm text-gray-600" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button type="button" className="flex items-center text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-xl" onClick={onNext}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M6.5 2h11a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" />
                <path d="M6.5 10h11a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" />
                <path d="m14.5 14-5-5 5-5" />
              </svg>
              Use Face ID / Touch ID
            </button>
          </div>
        </form>
      </div>
    </div>;
};
export default WelcomeScreen;