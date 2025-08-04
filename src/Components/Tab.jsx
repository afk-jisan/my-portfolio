import React, { useState, useCallback, useMemo  } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const tabs = useMemo(() => [
    { id: 'world', label: 'Frontend', content: 'React, TailwindCSS, Framer-motion, Redux-Toolkit, NextJS, TypeScript', gradient: 'from-blue-400/30 to-blue-600/30' },
    { id: 'us', label: 'Backend', content: 'Go, FastAPI, PostgreSQL, Supabase', gradient: 'from-red-400/30 to-red-600/30' },
    { id: 'technology', label: 'AI', content: 'Early learning stage', gradient: 'from-green-400/30 to-green-600/30' },
    { id: 'culture', label: 'Other skills', content: 'Git, Python, javascript', gradient: 'from-indigo-400/30 to-indigo-600/30' },
  ], []);

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [prevActiveTab, setPrevActiveTab] = useState(tabs[0].id);
  const [isSkippingTabs, setIsSkippingTabs] = useState(false);

  const selectedTab = tabs.find((tab) => tab.id === activeTab);
  const activeTabIndex = tabs.findIndex(tab => tab.id === activeTab);
  const prevTabIndex = tabs.findIndex(tab => tab.id === prevActiveTab);
  const direction = activeTabIndex > prevTabIndex ? 1 : -1;

  const handleTabClick = useCallback((newTabId) => {
    if (isSkippingTabs || newTabId === activeTab) return;

    const currentIndex = tabs.findIndex(t => t.id === activeTab);
    const newIndex = tabs.findIndex(t => t.id === newTabId);
    const distance = Math.abs(newIndex - currentIndex);

    if (distance > 1) {
      setIsSkippingTabs(true);
      let current = currentIndex;
      const dir = newIndex > current ? 1 : -1;

      const animateNext = () => {
        current += dir;
        setPrevActiveTab(tabs[current - dir].id);
        setActiveTab(tabs[current].id);

        if (current !== newIndex) {
          setTimeout(animateNext, 250);
        } else {
          setTimeout(() => setIsSkippingTabs(false), 300);
        }
      };

      setPrevActiveTab(tabs[current].id);
      setActiveTab(tabs[current + dir].id);
      setTimeout(animateNext, 250);
    } else {
      setPrevActiveTab(activeTab);
      setActiveTab(newTabId);
    }
  }, [activeTab, isSkippingTabs, tabs]);

  const contentTransitionDuration = isSkippingTabs ? 0.2 : Math.max(0.2, 0.4 - 0.05 * Math.abs(activeTabIndex - prevTabIndex));

  return (
    <div className="h-fit w-[85vw] xsm:w-full bg-[#69070aab] flex items-center justify-center rounded-2xl ">
      <div className="w-full max-w-4xl  border border-white/20 rounded-2xl shadow-2xl p-6 md:p-8">
        <h1 className="text-4xl md:text-4xl mb-2 font-bold font-jetbrains text-center bg-gradient-to-r from-[#ACBB78] to-[#F7F8F8] bg-clip-text text-transparent">
          Skills
        </h1>

        <div className="flex space-x-2 p-2 bg-white/10 border border-white/20 rounded-lg overflow-x-auto mb-2">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-md transition duration-300 whitespace-nowrap z-10 focus:outline-none cursor-pointer ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
              disabled={isSkippingTabs}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="tab-indicator"
                  className={`absolute inset-0 rounded-md bg-gradient-to-r ${tab.gradient} -z-10 shadow-lg`}
                  transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
                />
              )}
              {tab.label}
            </motion.button>
          ))}
        </div>

        <div className="relative min-h-[150px] md:min-h-[200px] flex items-center justify-center p-6 rounded-xl border border-white/20 bg-white/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab.id}
              initial={{ opacity: 0, x: direction * 100, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: direction * -100, filter: 'blur(10px)' }}
              transition={{ duration: contentTransitionDuration, ease: 'easeOut' }}
              className="absolute text-center text-lg md:text-xl text-gray-200 max-w-2xl px-5"
            >
              {selectedTab.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
